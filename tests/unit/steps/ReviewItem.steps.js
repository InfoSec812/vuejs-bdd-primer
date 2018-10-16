import { defineFeature, loadFeature } from "jest-cucumber";
import Quasar from "quasar-framework";
import { mount, createLocalVue } from "@vue/test-utils";
import ReviewItem from "@/components/ReviewItem.vue";
import iconSet from "quasar-framework/icons/fontawesome";
import "quasar-extras/fontawesome";

const feature = loadFeature("tests/unit/features/ReviewItem.feature");

const TEST_DATA = {
    stix_id: 872396132
};

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

  test("Review item renders properly with test data", ({ given, when, then }) => {
    let wrapper;
    let propsData;

    given("some test data", () => {
      propsData = TEST_DATA;
    });

    when("I render the ReviewItem component", () => {
      wrapper = mount(ReviewItem, { propsData: propsData });
    });

    then("I expect the Stix ID to be displayed", () => {
      expect(wrapper.find("td").element).toBeTruthy();
    });
  });
});