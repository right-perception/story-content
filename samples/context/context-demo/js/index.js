// context debug
if (typeof window._set_story === 'function') {
    _set_story();
}

$("#tabs a").on("click", function (event) {

    $("#tabs a.active").removeClass('active');
    $(event.target).addClass('active');
    let id = $("#tabs a.active").attr('id');

    let obj = null;
    switch (id) {
        case 'app-tab':
            obj = window.story.app;
            break;
        case 'content-tab':
            obj = window.story.content;
            break;
        case 'license-tab':
            obj = window.story.license;
        case 'quest-tab':
            obj = window.story.quest;
            break;
        case 'quest-progress-tab':
            obj = window.story.questProgress;
            break;
        case 'whole-tab':
            obj = window.story;
            break;
    }

    $("#content").text(JSON.stringify(obj, null, 2));
});

$("#content").text(JSON.stringify(window.story.app, null, 2));