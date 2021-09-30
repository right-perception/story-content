// context debug
if (typeof window._set_story === 'function') {
    _set_story();
}

var titles = {
    inprogress: "Заголовок события inprogress",
    success: "Заголовок события success",
    fail: "Заголовок события fail"
}

var messages = {
    inprogress: "Сообщение события inprogress",
    success: "Сообщение события success",
    fail: "Сообщение события fail"
}

var values = {
    inprogress: "Значение события inprogress",
    success: "Значениие события success",
    fail: "Значениие события fail"
}

$("input[name='quest-status']").change(function (e) {
    disableButtons(!e.target.value);

    $(`input[name='quest-status']`).prop('checked', false);
    $("[id^='quest-status-label-'").removeClass('active')

    $(`input[name='quest-status'][value='${e.target.value}']`).prop('checked', true);
    $(`#quest-status-label-${e.target.value}`).addClass('active')

    $("#title").val(titles[e.target.value]);
    $("#message").val(messages[e.target.value]);
    $("#value").val(values[e.target.value]);
});

$(function () {

    $("#response").html("<pre>" + JSON.stringify(window._story, null, 4) + "</pre>");

    $('body').css('background-color', window.story.questProgressAttributes?.content?.backgroundColor);
    $('#title').text(window.story.questProgressAttributes?.content?.title);

    if (story.questProgress?.quest?.stages) {
        $.each(story.questProgress.quest.stages, function (_, stage) {
            $('#stage').append($('<option>', {
                value: stage.id,
                text: stage.name
            }));
        });
    }

    window.story.questProgress.getCampaigns(function (campaigns) {
        $.each(campaigns, function (_, campaign) {
            $('#campaign').append($('<option>', {
                value: campaign.id,
                text: campaign.name
            }));
        });
    });

    $("#resetForm").click(function () {
        resetForm();
    });

    $("#transfer").click(function () {
        let formData = getFormData();

        let questEvent = {
            title: formData.title,
            message: formData.message,
            status: formData.status,
            value: formData.value,
            goal: formData.goal,
            stageId: formData.stageId
        };

        if (formData.points > 0) {
            questEvent.budgetEvent = getBudgetEvent();
        }

        story.questProgress.transfer(questEvent);

        resetForm();
    });

    $("#transferPoints").click(function () {
        story.questProgress.transferPoints(getBudgetEvent());
        resetForm();
    });

    $("#grantCampaign").click(function () {
        story.questProgress.grantCampaign({
            campaignId: "dbd24451.8020f915-cd52-412b-99f6-8fbd3c9936ec"
        });

        resetForm();
    });

    $("#getClient").click(function () {
        story.content.getClient($("#client").val(), (result) => {
            $("#response").html("<pre>" + JSON.stringify(result, null, 4) + "</pre>");
            resetForm();
        });
    });
});

var disableButtons = function (disabled) {
    $("#transfer").prop('disabled', disabled);
    $("#transferPoints").prop('disabled', disabled);
}

const getFormData = () => {
    return {
        status: $("input[name='quest-status']:checked").val(),
        points: $("#points").val(),
        title: $("#title").val(),
        message: $("#message").val(),
        value: $("#value").val(),
        goal: $("#goal").prop("checked"),
        stageId: $("#stage").val()
    };
}

const getBudgetEvent = () => {
    let formData = getFormData();

    return {
        operationType: "Accepted",
        direction: "Forward",
        title: formData.title,
        message: formData.message,
        value: formData.points
    };
}

var disableForm = function () {
    $("input[name='quest-status']").prop('disabled', true);
    $("[id^='quest-status-label-'").addClass('disabled')
    $("#points").prop('disabled', true);
    $("#title").prop('disabled', true);
    $("#message").prop('disabled', true);
    $("#value").prop('disabled', true);
    $("#goal").prop('disabled', true);
}
var enableForm = function () {
    $("input[name='quest-status']").prop('disabled', false);
    $("[id^='quest-status-label-'").removeClass('disabled')
    $("#points").prop('disabled', false);
    $("#title").prop('disabled', false);
    $("#message").prop('disabled', false);
    $("#value").prop('disabled', false);
    $("#goal").prop('disabled', false);
}

var resetForm = function () {
    $(`input[name='quest-status']:checked`).prop('checked', false);
    $("[id^='quest-status-label-'").removeClass('active')
    $("#title").val("");
    $("#message").val("");
    $("#value").val("");
    $("#points").val(0);
    $("#goal").prop("checked", false);
    enableForm();
    disableButtons(true);
}