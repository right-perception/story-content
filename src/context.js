// rev:54

; (function () {
    if (window._story === undefined) {
        window._story = {};
    }

    if (window._storyCallbacks === undefined) {
        window._storyCallbacks = {};
    }

    const getType = function (value) {
        let type;
        switch (typeof value) {
            case 'boolean':
                type = 'boolean';
                break;
            case 'number':
                if (!Number.isFinite(value)) {
                    throw new TypeError('story: infinite numbers and NaN\'s are not supported');
                }

                if (Number.isInteger(value)) {
                    type = 'integer';
                } else {
                    type = 'float';
                }

                break;
            case 'string':
                type = 'string';
                break;
            case 'undefined':
                type = 'undefined';
                break;
            case 'object':
                if (value === null) {
                    type = 'null';
                } else {
                    type = 'object'
                }
                break;
            default:
                throw new TypeError(`story: type ${typeof value} is not supported`);
        }

        return type;
    }

    const notifyApp = function (operation, objectName, keyPath, value) {

        let type = getType(value);

        // android
        if (typeof window.nativeStory?.setStoryProp === 'function') {
            if (operation === 'set') {
                window.nativeStory.setStoryProp(objectName, keyPath, type, value);
            }
            if (operation === 'delete') {
                window.nativeStory.deleteStoryProp(objectName, keyPath);
            }
        }

        // ios
        if (window.webkit !== undefined && typeof webkit.messageHandlers?.setStoryProp?.postMessage === 'function') {
            if (operation === 'set') {
                let model = { objectName, keyPath, type, value };
                webkit.messageHandlers.setStoryProp.postMessage(JSON.stringify(model));
            } else {
                let model = { objectName, keyPath };
                webkit.messageHandlers.deleteStoryProp.postMessage(JSON.stringify(model));
            }
        }
    }

    const runAction = function (objectName, action, model) {
        // android
        if (typeof window.nativeStory?.runAction === 'function') {
            window.nativeStory.runAction(objectName, action, JSON.stringify(model));
        }

        // ios
        if (window.webkit !== undefined && typeof webkit.messageHandlers?.runAction?.postMessage === 'function') {
            let iosModel = {
                ...model,
                objectName,
                action
            }
            webkit.messageHandlers.runAction.postMessage(JSON.stringify(iosModel));
        }
    }

    const pushKeyPathPart = function (keyPathParts, part) {
        let newKeyPathParts = keyPathParts.slice();
        newKeyPathParts.push(part);
        return newKeyPathParts;
    }

    const validateAndNotify = function (objectName, keyPathParts, property, value) {
        setTimeout(function () {
            try {
                let newKeyPathParts = pushKeyPathPart(keyPathParts, property);
                let keyPath = newKeyPathParts.join('.');
                if (typeof value === 'undefined') {
                    notifyApp('delete', objectName, keyPath, value);
                } else if (typeof value === 'object' && value !== null) {
                    for (prop in value) {
                        validateAndNotify(objectName, newKeyPathParts, prop, value[prop]);
                    }
                } else if (value === null ||
                    typeof value === 'boolean' ||
                    typeof value === 'number' ||
                    typeof value === 'string') {
                    notifyApp('set', objectName, keyPath, value);
                } else {
                    throw new Error(`story: ${typeof value} is not supported`);
                }
            } catch (e) {
                console.error(e);
            }
        }, 5);
    }

    const setStory = newStory => {
        for (objectName in newStory) {
            var state = newStory[objectName];
            for (prop in state) {
                validateAndNotify(objectName, [], prop, state[prop]);
            }
        }
    };

    const removeStoryProp = function (prop) {
        let parts = prop.split('.');
        let objectName = parts.shift();
        notifyApp('delete', objectName, parts.join('.'));
    }

    const proxifyState = function (objectName, keyPathParts, state, scheme) {

        let getter = function (target, property) {
            return target[property];
        };

        let setter = function (target, property, value) {
            if (!scheme.contentMutable) {
                throw new Error(`story: property ${property} is immutable`);
            }

            var type = getType(value);
            target[property] = type === 'object' ? { ...value } : value;
            validateAndNotify(objectName, keyPathParts, property, target[property]);
            return true;
        };

        let definer = function (_, property, attributes) {
            if (!scheme.contentMutable) {
                throw new Error(`story: property ${property} is immutable`);
            }

            if (attributes === undefined) {
                throw new Error('story: property attributes must be set');
            }

            var type = getType(attributes.value);
            let value = type === 'object' ? { ...attributes.value } : attributes.value;
            validateAndNotify(objectName, keyPathParts, property, value);
            return true;
        };

        let deleter = function (_, property) {
            if (!scheme.contentMutable) {
                throw new Error(`story: property ${property} is immutable`);
            }

            validateAndNotify(objectName, keyPathParts, property);
            return true;
        };

        let newState = {};
        for (stateProp in state) {
            newState[stateProp] = state[stateProp] !== null && typeof state[stateProp] === 'object'
                ? proxifyState(objectName, pushKeyPathPart(keyPathParts, stateProp), state[stateProp], scheme)
                : state[stateProp];
        }

        let result = new Proxy(newState, {
            get: getter,
            set: setter,
            defineProperty: definer,
            deleteProperty: deleter
        });

        return result;
    }

    const proxifyStory = function (newStory) {
        let newState = {};
        for (let newStoryProp in newStory) {
            if (!(newStoryProp in newStory.scheme) || newStoryProp === 'scheme') {
                continue;
            }

            let scheme = newStory.scheme[newStoryProp];

            if (scheme.actions) {
                for (let action of scheme.actions) {
                    if (window._storyCallbacks[newStoryProp] === undefined) {
                        window._storyCallbacks[newStoryProp] = {};
                    }
                    newStory[newStoryProp][action.name] = function (...args) {
                        let model = action.hasModel ? args[0] : null;
                        let callback = (action.hasModel ? args[1] : args[0]) || function () { };
                        window._storyCallbacks[newStoryProp][`${action.name}Callback`] = callback;
                        runAction(newStoryProp, action.name, model);
                    }
                }
            }
            newState[newStoryProp] = proxifyState(newStoryProp, [], newStory[newStoryProp], scheme);
        }

        let onStoryChange = window.story?.onStoryChange;
        window.story = newState;
        window.story.onStoryChange = onStoryChange;

        window.story.setStory = setStory;
        window.story.removeStoryProp = removeStoryProp;
    }

    proxifyStory({ ..._story });

    if (window._onStoryChange === undefined) {
        Object.defineProperty(window, '_onStoryChange', {
            value: function () {
                try {
                    proxifyStory({ ..._story });
                    if (typeof window.story.onStoryChange === 'function') {
                        story.onStoryChange();
                    }
                } catch (e) {
                    console.error(e);
                }

            },
            configurable: false,
            enumerable: false,
            writable: false
        });
    }

})();