// context debug
if (typeof window._set_story === 'function') {
    _set_story();
}

const renderFiles = () => {
    $("#files-body").html("");
    for (key in story.questProgressFiles.items) {
        let item = story.questProgressFiles.items[key];

        let svg = $("#svg-image").clone();
        svg.removeClass('hidden');

        let btn = $(`<button class="btn btn-outlined-secondary btn-sm">X</button>`);
        btn.on('click', () => {
            story.questProgressFiles.delete(item.name, (result) => {
                $("#result").text(JSON.stringify(result, null, 2));
            });
        });

        let div = $("<div>");
        div.append(svg);
        div.append(`<strong>${item.name}</strong>`);
        div.append(btn);

        $("#files-body").append(div);
    };
}

$("#tabs a").on("click", function (event) {

    $("#tabs a.active").removeClass('active');
    $(event.target).addClass('active');

    let tab = $(event.target).prop('id').split('-')[0];
    $(".container-fluid > div").each((_, element) => {
        let body = $(element).prop('id').split('-')[0];
        if (body === tab) {
            $(element).removeClass('hidden');
        } else {
            $(element).addClass('hidden');
        }
    });
});

$("#btn-video-dialog").on("click", function () {
    story.questProgressFiles.openVideoDialog({}, (result) => {
        $("#result").text(JSON.stringify(result, null, 2));
    });
});

$("#btn-photo-dialog").on("click", function () {
    story.questProgressFiles.openPhotoDialog({}, (result) => {
        $("#result").text(JSON.stringify(result, null, 2));
    });
});

$("#btn-audio-dialog").on("click", function () {
    story.questProgressFiles.openAudioDialog({}, (result) => {
        $("#result").text(JSON.stringify(result, null, 2));
    });
});

$("#btn-file-dialog").on("click", function () {
    story.questProgressFiles.openFileDialog({}, (result) => {
        $("#result").text(JSON.stringify(result, null, 2));
    });
});

$("#btn-record-start").on("click", function () {
    story.questProgressFiles.startRecordScreen({});
});

$("#btn-record-stop").on("click", function () {
    story.questProgressFiles.stopRecordScreen({});
});

$("#btn-code-bar").on("click", function () {
    story.questProgressFiles.openBarDialog({});
});

$("#btn-code-qr").on("click", function () {
    story.questProgressFiles.openQRDialog({});
});

renderFiles();

story.onStoryChange = () => {
    renderFiles();
};