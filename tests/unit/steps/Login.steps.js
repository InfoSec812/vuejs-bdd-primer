import { defineFeature, loadFeature } from "jest-cucumber";
import { mount, createLocalVue } from "@vue/test-utils";
import LogIn from "@/components/LogIn.vue";

const feature = loadFeature("tests/unit/features/Login.feature");

defineFeature(feature, test => {

    test(/^Entering credentials and clicking the login button$/, ({ given, when, then }) => {
    // Define the wrapper at the higher scope so that it is accessible to all of the scenario blocks
    let wrapper;
    
    // Create a mocked function using Jest which will be used to replace the real implementation
    // of the login function from the component
    const login = jest.fn();
    
    given(/^An instance of our Login component$/, () => {
      wrapper = mount(LogIn);
    });
    
    given(/^A mocked implementation of the login method$/, () => {
      wrapper.vm.login = login;
    });

    when(/^I enter a username$/, () => {
      wrapper.find('input[type=text]').setValue('username');
    });
    
    when(/^$I enter a password/, () => {
      wrapper.find('input[type=password]').setValue('password');
    });
    
    when(/^I click the login button$/, () => {
      wrapper.find('button').trigger('click');
    });

    then(/^I expect the login handler method to be executed$/, () => {
      expect(login).toHaveBeenCalled();
    });
  });
});