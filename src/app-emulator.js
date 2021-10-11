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
        "questProgressFiles": {
            "appMutable": true,
            "contentMutable": false,
            "actions": [
                {
                    "name": "delete",
                    "hasModel": true
                },
                {
                    "name": "setMetadata",
                    "hasModel": true
                },
                {
                    "name": "removeMetadata",
                    "hasModel": true
                },
                {
                    "name": "openVideoDialog",
                    "hasModel": true
                },
                {
                    "name": "openAudioDialog",
                    "hasModel": true
                },
                {
                    "name": "openPhotoDialog",
                    "hasModel": true
                },
                {
                    "name": "openFileDialog",
                    "hasModel": true
                },
                {
                    "name": "startRecordScreen",
                    "hasModel": false
                },
                {
                    "name": "stopRecordScreen",
                    "hasModel": false
                },
                {
                    "name": "openBarDialog",
                    "hasModel": true
                },
                {
                    "name": "openQRDialog",
                    "hasModel": true
                }
            ]
        },
        "licenseAttributes": {
            "appMutable": true,
            "contentMutable": true
        },
        "questAttributes": {
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
        }
    },
    "questProgressFiles": {
        "items": {
            "0": {
                "name": "actions-demo.zip",
                "uri": "https://storageaccountknauf9103.blob.core.windows.net/a3683112-24061960-4e41-47d0-b466-246dda10e467/actions-demo.zip?sv=2020-08-04&st=2021-10-06T07%3A11%3A06Z&se=2022-10-07T07%3A11%3A06Z&sr=b&sp=r&sig=r8QxkHHmH0et3sfkXfGpoHoM%2FkowNJBxEyNXUmPYjxE%3D",
                "size": 55442,
                "metadata": {
                    "hash": "1234",
                    "content_type": "application/zip",
                    "some_meta": "23123123"
                }
            },
            "1": {
                "name": "korabli-more-noch-pejzazh-transport-27131.jpeg",
                "uri": "https://storageaccountknauf9103.blob.core.windows.net/a3683112-24061960-4e41-47d0-b466-246dda10e467/korabli-more-noch-pejzazh-transport-27131.jpeg?sp=r&st=2021-10-11T06:14:57Z&se=2021-10-11T14:14:57Z&spr=https&sv=2020-08-04&sr=b&sig=gMZlaHKCSUPxmRMpgnLcBqE8oHGRN3KUs2BIDPYA7GM%3D",
                "size": 334455,
                "metadata": {
                    "hash": "gfdhgdhgd",
                    "content_type": "image/jpeg",
                    "some_meta": "yrfgjytj"
                }
            },
            "2": {
                "name": "Дефицит, построенный на обмане. Противоречивые новые GPU Nvidia. RX 6600. И почему мы ждем Apple M1X.mp4",
                "uri": "https://storageaccountknauf9103.blob.core.windows.net/a3683112-24061960-4e41-47d0-b466-246dda10e467/%D0%94%D0%B5%D1%84%D0%B8%D1%86%D0%B8%D1%82%2C%20%D0%BF%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BD%D0%B0%20%D0%BE%D0%B1%D0%BC%D0%B0%D0%BD%D0%B5.%20%D0%9F%D1%80%D0%BE%D1%82%D0%B8%D0%B2%D0%BE%D1%80%D0%B5%D1%87%D0%B8%D0%B2%D1%8B%D0%B5%20%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5%20GPU%20Nvidia.%20RX%206600.%20%D0%98%20%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83%20%D0%BC%D1%8B%20%D0%B6%D0%B4%D0%B5%D0%BC%20Apple%20M1X.mp4?sp=r&st=2021-10-11T06:33:54Z&se=2021-10-11T14:33:54Z&spr=https&sv=2020-08-04&sr=b&sig=JYuognTYVtxfnU65dpL%2BYWu7lmuun%2BnSDEnJiwbSATk%3D",
                "size": 25431113728,
                "metadata": {
                    "hash": "gfdhgdfhgfdghjfghkjjghkgdhgdvghjghjgjghjghjghjghjghjghjghjgjghjghj",
                    "content_type": "video/mp4",
                    "some_meta": "y634u5uklll;"
                }
            },
            "3": {
                "name": "Different Kind of Blues - IAMJJ.m4a",
                "uri": "https://storageaccountknauf9103.blob.core.windows.net/a3683112-24061960-4e41-47d0-b466-246dda10e467/Different%20Kind%20of%20Blues%20-%20IAMJJ.m4a?sp=r&st=2021-10-11T06:45:37Z&se=2021-10-11T14:45:37Z&spr=https&sv=2020-08-04&sr=b&sig=fMt1shxu1UCIXk7WX%2B37HSIVS5kt7ZHa%2FKog239y8IY%3D",
                "size": 3638558,
                "metadata": {
                    "hash": "weou248ysdfkjhcx",
                    "content_type": "audio/x-m4a",
                    "some_meta": "hg5467ihgjf"
                }
            }
        }
    },
    "licenseAttributes": {

    },
    "questAttributes": {
        "stagesSettings": {
            "c477add3-788f-45bb-a435-d09843366743": {
                "backgroundColor": "#ffd1dc",
                "title": "Title for stage 0"
            },
            "9a4bda8a-3d4a-4f97-856a-42c211c620fe": {
                "backgroundColor": "#6495ed",
                "title": "Title for stage 1"
            },
            "fa8e69f8-1243-42ca-bb9f-5d636cacd7cf": {
                "backgroundColor": "#6ee3b7",
                "title": "Title for stage 2"
            }
        }
    },
    "questProgressAttributes": {
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
        let model = JSON.parse(json);

        if (objectName === 'content' && action === 'getClient') {
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

        if (objectName === 'questProgressFiles' && action === 'delete') {
            for (let key in _storyTemplate.questProgressFiles.items) {
                let item = _storyTemplate.questProgressFiles.items[key];
                if (item.name !== model) {
                    continue;
                }

                delete _storyTemplate.questProgressFiles.items[key];
                _storyCallbacks.questProgressFiles.deleteCallback({ success: true, fileName: model });
                _onStoryChange();
                return;
            }
        }

        if (objectName === 'questProgressFiles' && action === 'setMetadata') {
            let item = Object.values(_storyTemplate.questProgressFiles.items).find(x => x.name === model.name);
            for (let key in model.metadata) {
                item.metadata[key] = model.metadata[key];
            }

            _storyCallbacks.questProgressFiles.setMetadataCallback({ success: true, fileName: model.name });
            _onStoryChange();
        }

        if (objectName === 'questProgressFiles' && action === 'removeMetadata') {
            let item = Object.values(_storyTemplate.questProgressFiles.items).find(x => x.name === model.name);
            for (let key of model.keys) {
                delete item.metadata[key];
            }
            _storyCallbacks.questProgressFiles.removeMetadataCallback({ success: true, fileName: model.name });
            _onStoryChange();
        }

        if (objectName === 'questProgressFiles' && action === 'openFileDialog') {
            _storyCallbacks.questProgressFiles.openFileDialogCallback({ success: true, fileName: 'file1.ext' });
        }
    }
}
