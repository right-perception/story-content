window._storyTemplate = {
    "scheme": {
        "app": {
            "appMutable": false,
            "contentMutable": false
        },
        "license": {
            "appMutable": false,
            "contentMutable": false
        },
        "content": {
            "appMutable": false,
            "contentMutable": false,
            "actions": [
                {
                    "name": "getClient",
                    "hasModel": true
                }
            ]
        },
        "quest": {
            "appMutable": true,
            "contentMutable": false,
        },
        "questProgress": {
            "appMutable": true,
            "contentMutable": false,
            "actions": [
                {
                    "name": "transfer",
                    "hasModel": true
                },
                {
                    "name": "transferPoints",
                    "hasModel": true
                },
                {
                    "name": "grantCampaign",
                    "hasModel": true
                },
                {
                    "name": "getCampaigns",
                    "hasModel": false
                }
            ]
        },
        "licenseAttributes": {
            "appMutable": true,
            "contentMutable": true
        },
        "questProgressAttributes": {
            "appMutable": true,
            "contentMutable": true
        }
    },
    "app": {

        "name": "context debug app",
        "version": "0.1.2"
    },
    "license": {
        "phone": "70000000001"
    },
    "content": {
        "id": "209",
    },
    "quest": {
        "stages": {
            "846da8c1.c477add3-788f-45bb-a435-d09843366743": {
                "id": "846da8c1.c477add3-788f-45bb-a435-d09843366743",
                "name": "Stage-0"
            },
            "846da8c1.9a4bda8a-3d4a-4f97-856a-42c211c620fe": {
                "id": "846da8c1.9a4bda8a-3d4a-4f97-856a-42c211c620fe",
                "name": "Stage-1"
            },
            "846da8c1.fa8e69f8-1243-42ca-bb9f-5d636cacd7cf": {
                "id": "846da8c1.fa8e69f8-1243-42ca-bb9f-5d636cacd7cf",
                "name": "Stage-2"
            }
        }
    },
    "questProgress": {
        "id": "a3683112.24061960-4e41-47d0-b466-246dda10e467",
        "stage": {
            "id": "846da8c1.c477add3-788f-45bb-a435-d09843366743"
        },
        "quest": {
            "id": "2a6b25f7.c73e0ca8-ed80-4e32-b0b6-1a0999052f63",
            "stages": {
                "846da8c1.af4bcc6e-27a1-455e-a5c2-90376e1db861": {
                    "id": "846da8c1.af4bcc6e-27a1-455e-a5c2-90376e1db861",
                    "name": "Промо"
                },
                "846da8c1.b881da79-3f15-41be-93a5-0926e6f76489": {
                    "id": "846da8c1.b881da79-3f15-41be-93a5-0926e6f76489",
                    "name": "Промо 1"
                },
                "846da8c1.c3be83d0-bc71-44ab-b090-2ee97f375bbc": {
                    "id": "846da8c1.c3be83d0-bc71-44ab-b090-2ee97f375bbc",
                    "name": "УУУУУУУУУУУУУУ"
                }
            }
        }
    },
    "licenseAttributes": {

    },
    "questProgressAttributes": {
        "stagesSettings": {
            "846da8c1.c477add3-788f-45bb-a435-d09843366743": {
                "backgroundColor": "#ffd1dc",
                "title": "Title for stage 0"
            },
            "846da8c1.9a4bda8a-3d4a-4f97-856a-42c211c620fe": {
                "backgroundColor": "#6495ed",
                "title": "Title for stage 1"
            },
            "846da8c1.fa8e69f8-1243-42ca-bb9f-5d636cacd7cf": {
                "backgroundColor": "#6ee3b7",
                "title": "Title for stage 2"
            }
        }
    }
};

window._set_story = function () {
    window._story = _storyTemplate;
    _onStoryChange();
}

window.nativeStory = {
    setStoryProp: function (objectName, keyPath, _, value) {
        let parts = keyPath.split('.');
        let lastPart = parts.pop();
        let newState = JSON.parse(JSON.stringify(_story))
        let field = newState[objectName];
        for (part of parts) {
            if (field[part] === undefined || field[part] === null) {
                field[part] = {}
            }
            field = field[part];
            if (field === undefined) {
                field = {};
            }
        }
        field[lastPart] = value;
        window._story = newState;
        _onStoryChange();
    },
    deleteStoryProp: function (objectName, keyPath) {
        let parts = keyPath.split('.');
        let lastPart = parts.pop();
        let newState = JSON.parse(JSON.stringify(_story))
        let field = newState[objectName];
        for (part of parts) {
            if (field[part] === undefined || field[part] === null) {
                field[part] = {}
            }
            field = field[part];
        }
        delete field[lastPart];
        window._story = newState;
        _onStoryChange();
    },
    runAction: function (objectName, action, json) {
        if (objectName === 'content' && action === 'getClient') {
            let model = JSON.parse(json);
            window._storyCallbacks.content.getClientCallback({ id: model, name: 'client name1' });
        } if (objectName === 'questProgress' && action === 'transferPoints') {
            window._storyCallbacks.questProgress.transferPointsCallback({});
        }
        if (objectName === 'questProgress' && action === 'getCampaigns') {
            window._storyCallbacks.questProgress.getCampaignsCallback([
                {
                    id: '1',
                    name: 'campaign1'
                },
                {
                    id: '2',
                    name: 'campaign2'
                }
            ]);
        }
    }
}
