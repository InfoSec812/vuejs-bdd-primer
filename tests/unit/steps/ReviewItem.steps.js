import { defineFeature, loadFeature } from "jest-cucumber";
import Quasar from "quasar-framework";
import { mount, createLocalVue } from "@vue/test-utils";
import ReviewItem from "@/components/ReviewItem.vue";
import iconSet from "quasar-framework/icons/fontawesome";

const feature = loadFeature("tests/unit/features/ReviewItem.feature");

const TEST_DATA = {
  stixId: '1',
  actionDate: '09/15/2018',
  objectType: 'Indicator',
  fieldName: 'Title',
  fieldValue: 'I contain a SSN',
  status: 'New',
  groupAction: 'Disseminate'
};

const TEST_VALUE_INPUT = "This is my test value";

defineFeature(feature, test => {
  let localVue;
  let wrapper;
  let propsData;

  const givenSomeTestData = given => {
    given(/^some test data$/, () => {
      propsData = TEST_DATA;
    });
  };

  const whenIRenderTheReviewItem = when => {
    when(/^I render the ReviewItem component$/, () => {
      wrapper = mount(ReviewItem, { propsData: propsData });
    });
  };

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

    givenSomeTestData(given);

    whenIRenderTheReviewItem(when);

    then("I expect the Stix ID to be displayed in the first column", () => {
      expect(wrapper.find("td").html()).toContain(TEST_DATA.stixId);
    });

    then("I expect a pop-up edit field in the last column", () => {
      expect(wrapper.find("td.cursor-pointer").element).toBeTruthy();
    });
  });

  test("Value updated when edited", ({ given, when, then }) => {
    givenSomeTestData(given);

    whenIRenderTheReviewItem(when);

    when(/^I click on the field value$/, () => {
      const valueField = wrapper.find("td.cursor-pointer");
      valueField.trigger("click");
    });

    when(/^I edit the field value$/, () => {
      const inputField = wrapper.find("input.q-input-target.q-no-input-spinner.ellipsis");
      inputField.setValue(TEST_VALUE_INPUT);
    });

    when(/^I click the Set button$/, () => {
      const setButton = wrapper.find("button.q-btn");
      setButton.trigger("click");
    });

    then(/^an update event will be emitted with the new data$/, () => {
      let eventData = TEST_DATA;
      eventData.fieldValue = TEST_VALUE_INPUT;
      expect(wrapper.emitted("fieldValueUpdate")).toBeDefined();
      expect(wrapper.emitted("fieldValueUpdate").length).toEqual(1);
      expect(wrapper.emitted("fieldValueUpdate")[0]).toEqual(eventData);
      resolve();
    });
  });
});