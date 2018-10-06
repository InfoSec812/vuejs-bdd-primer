import { defineFeature, loadFeature } from "jest-cucumber";
import Quasar from "quasar-framework";
import { mount, createLocalVue } from "@vue/test-utils";
import Default from "src/layouts/Default.vue";
import router from "./src/router.js";
import iconSet from "quasar-framework/icons/fontawesome";
import "quasar-extras/fontawesome";

const feature = loadFeature("tests/unit/features/Home.feature");

defineFeature(feature, test => {
  let localVue;

  /**
   * Initialize the Vue.js rendering engine with Quasar and font-awesome
   */
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Quasar, {
      config: {},
      iconSet: iconSet
    });
  });

  test("Opening the initial web page", ({ given, when, then }) => {
    let wrapper;
    /**
     * Load our Default layout into the Vue rendering engine along with the Router instance
     */
    given("The page is open in a browser", () => {
      wrapper = mount(Default, { localVue, router });
    });

    /**
     * There really is not operation here, but we need a `when` clause
     */
    when("I inspect the page", () => {
      // No-OP
    });

    then("I should see the Home landing page", () => {
      expect(wrapper.html()).toMatch(/^<div.*/);
    });

    then("the page should contain a logo", () => {
      expect(wrapper.find("img").attributes("src")).toBe("../assets/logo.png");
    });

    then("the page should have a sidebar menu", () => {
      expect(wrapper.find("aside.q-layout-drawer")).toBeDefined();
      expect(wrapper.find("i.q-icon.fas.fa-bars")).toBeDefined();
    });

    then("the page should have a title bar", () => {
      expect(wrapper.find("div.q-toolbar-title")).toBeDefined();
    });

    then("the title bar should contain the correct words", () => {
      expect(wrapper.find("div.q-toolbar-title").text()).toMatch(/^My New Application.*/);
    });

    then("there should be no other components in the page-view", () => {
      expect(wrapper.find("main.q-layout-page").children().len).toBe(1);
    });
  });
});
