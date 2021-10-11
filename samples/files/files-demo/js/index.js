// context debug
if (typeof window._set_story === 'function') {
    _set_story();
}

var metadataRenderedFile = null;
var contentRenderedFile = null;

const renderFileMetadata = (item, forceRender) => {

    if (metadataRenderedFile === item.name && !forceRender) {
        return;
    }

    let div = $("#files-metadata");
    div.html("");

    for (let key in item.metadata) {
        let value = item.metadata[key];
        let tr = $(document.createElement('tr'));
        $(document.createElement('th')).prop('scope', 'row').append(key).appendTo(tr);
        $(document.createElement('td')).css('word-break', 'break-word').append(value).appendTo(tr);

        let btn = $(`<button class="btn btn-sm">X</button>`);
        btn.on('click', () => {
            story.questProgressFiles.removeMetadata({ name: item.name, keys: [key] });
        });

        $(document.createElement('td')).append(btn).appendTo(tr);
        tr.appendTo(div);
    }

    let keyInput = $(document.createElement('input'))
        .prop({
            type: 'text',
            name: 'metadata-key',
            placeholder: 'key'
        })
        .addClass('form-control form-control-sm');
    $(document.createElement('th')).prop('scope', 'row').append(keyInput).appendTo(div);

    let valueInput = $(document.createElement('input'))
        .prop({
            type: 'text',
            name: 'metadata-value',
            placeholder: 'value'
        })
        .addClass('form-control form-control-sm');
    $(document.createElement('td')).append(valueInput).appendTo(div);

    let btn = $(`<button class="btn btn-sm">✓</button>`);
    btn.on('click', (event) => {
        event.stopPropagation();
        let key = $("input[name='metadata-key']").val();
        let value = $("input[name='metadata-value']").val();
        let metadata = {};
        metadata[key] = value;
        story.questProgressFiles.setMetadata({ name: item.name, metadata });
    });
    $(document.createElement('td')).append(btn).appendTo(div);

    metadataRenderedFile = item.name;
};

const renderFileContent = (item, forceRender) => {

    if (contentRenderedFile === item.name && !forceRender) {
        return;
    }

    let div = $("#files-content");
    div.html("");

    let contentType = item.metadata.content_type;
    let uri = item.uri;

    switch (contentType) {
        case 'image/png':
        case 'image/jpeg':
            div.append(`<img src="${uri}" class="img-fluid"/>`);
            break;
        case 'audio/mpeg':
        case 'audio/x-m4a':
            div.append(`<audio controls src=${uri} />`);
            break;
        case 'video/mp4':
            let src = $(`<source src=${uri} type=${contentType} />`);
            let video = $(`<video controls class="img-fluid" />`);
            video.append(src);
            div.append(video);
            break;
        default:
            div.append('<i>Невозможно отобразить файл.</i>')
            break;
    }

    contentRenderedFile = item.name;
};

const renderFiles = () => {
    $("#files-list").html("");

    for (key in story.questProgressFiles.items) {
        const item = story.questProgressFiles.items[key];
        const contentType = item.metadata.content_type;

        let svgId;
        switch (contentType) {
            case 'image/png':
            case 'image/jpeg':
                svgId = 'svg-image';
                break;
            case 'audio/mpeg':
            case 'audio/x-m4a':
                svgId = 'svg-audio';
                break;
            case 'video/mp4':
                svgId = 'svg-video';
                break;
            default:
                svgId = 'svg-file';
                break;
        }

        let svg = $('#' + svgId).clone();

        let btn = $(`<button class="btn btn-sm">X</button>`);
        btn.on('click', (event) => {
            event.stopPropagation();
            story.questProgressFiles.delete(item.name, (result) => {
                $("#files-metadata").html("");
                $("#files-content").html("");
                $("#result").text(JSON.stringify(result, null, 2));
            });
        });

        let tr = $(document.createElement('tr'));
        $(document.createElement('td')).append(svg).appendTo(tr);
        $(document.createElement('th')).prop('scope', 'row').append(item.name).css('word-break', 'break-word').appendTo(tr);
        $(document.createElement('td')).append(btn).appendTo(tr);

        tr.on('click', () => {
            renderFileMetadata(item);
            renderFileContent(item);
        });

        $("#files-list").append(tr);
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

    if (metadataRenderedFile) {
        let item = Object.values(story.questProgressFiles.items).find(x => x.name === metadataRenderedFile);
        if (item) {
            renderFileMetadata(item, true);
        }
    }

    if (contentRenderedFile) {
        let item = Object.values(story.questProgressFiles.items).find(x => x.name === contentRenderedFile);
        if (item) {
            renderFileContent(item, true);
        }
    }
};