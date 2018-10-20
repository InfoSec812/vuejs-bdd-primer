import Vue from 'vue';
import { defineFeature, loadFeature } from "jest-cucumber";
import Quasar from "quasar-framework";
import { mount, createLocalVue } from "@vue/test-utils";
import LogIn from "@/components/LogIn.vue";
import iconSet from "quasar-framework/icons/fontawesome";
import "quasar-extras/fontawesome";

Vue.config.silent = true;

const feature = loadFeature("tests/unit/features/Login.feature");

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

  test('Entering credentials and clicking the login button', ({ given, when, then }) => {
    // Define the wrapper at the higher scope so that it is accessible to all of the scenario blocks
    let wrapper;
    
    given('an instance of our Login component', () => {
      wrapper = mount(LogIn, { localVue });
    });
    
    given('a mocked implementation of the login method', () => {
      // Create a mocked function using Jest which will be used to replace the real implementation
      // of the login function from the component
      const login = jest.fn();
      wrapper.vm.login = login;
    });

    when('I enter a username', () => {
      wrapper.find('input[type=text]').setValue('username');
    });
    
    when('I enter a password', () => {
      wrapper.find('input[type=password]').setValue('password');
    });
    
    when('I click the login button', () => {
      wrapper.find('button').trigger('click');
    });

    then('I expect the login handler method to be executed', async () => {
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.login).toHaveBeenCalled();
    });
  });
});