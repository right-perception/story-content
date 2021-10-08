// context debug
if (typeof window._set_story === 'function') {
    _set_story();
}

$("#btn-1").click(() => {
    story.licenseAttributes.testProp1 = 1;
});

$("#btn-4").click(() => {
    story.licenseAttributes.testProp1 = undefined;
});

$("#btn-5").click(() => {
    story.licenseAttributes.testProp5 = { testProp51: 1 };
});

$("#btn-6").click(() => {
    story.setStory({ licenseAttributes: { testProp6: 6 } });
});

$("#btn-7").click(() => {
    story.removeStoryProp('licenseAttributes.testProp6');
});

$("#btn-999").click(() => {
    story.licenseAttributes.testProp1 = undefined;
    story.licenseAttributes.testProp5 = undefined;
    story.licenseAttributes.testProp6 = undefined;
});

story.onStoryChange = () => {
    $("#context").text(JSON.stringify(story.licenseAttributes, null, 2));
};

story.onStoryChange();