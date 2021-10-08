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
                    "hash": "1234"
                }
            },
            "1": {
                "name": "some-image.png",
                "uri": "https://storageaccountknauf9103.blob.core.windows.net/a3683112-24061960-4e41-47d0-b466-246dda10e467/actions-demo.zip?sv=2020-08-04&st=2021-10-06T07%3A11%3A06Z&se=2022-10-07T07%3A11%3A06Z&sr=b&sp=r&sig=r8QxkHHmH0et3sfkXfGpoHoM%2FkowNJBxEyNXUmPYjxE%3D",
                "size": 334455,
                "metadata": {
                    "hash": "gfdhgdhgd"
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
        if (objectName === 'questProgressFiles' && action === 'delete') {
            console.log('questProgressFiles', 'delete', json);
        }
        if (objectName === 'questProgressFiles' && action === 'openFileDialog') {
            _storyCallbacks.questProgressFiles.openFileDialogCallback({ success: true, fileName: 'file1.ext' });
        }
    }
}
