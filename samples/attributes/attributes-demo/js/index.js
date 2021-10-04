// context debug
if (typeof window._set_story === 'function') {
    _set_story();
}

$("#btn-1").click(() => {
    story.licenseAttributes.testProp1 = 1;
});

$("#btn-6").click(() => {
    story.setStory({ licenseAttributes: { testProp6: 6 } });
});

story.onStoryChange = () => {
    $("#context").text(JSON.stringify(story.licenseAttributes, null, 2));
};

story.onStoryChange();