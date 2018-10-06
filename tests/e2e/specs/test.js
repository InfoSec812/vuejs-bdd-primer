// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "default e2e tests": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent("main.q-layout-page")
      .assert.containsText(".q-toolbar-title", "My New Application")
      .assert.elementCount("img", 1)
      .end();
  }
};
