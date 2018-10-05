import { defineFeature, loadFeature } from 'jest-cucumber';
import { mount } from '@vue/test-utils';
import App from '@/App.vue';

const feature = loadFeature('tests/unit/features/Home.feature');

defineFeature(feature, (test) => {
  test('Opening the initial web page', ({ given, when, then }) => {
    let wrapper;
    given('The page is open in a browser', () => {
      wrapper = mount(App);
    });

    when('I inspect the page', () => {
      // No-OP
    });

    then('I should see the Home landing page', () => {
      expect(wrapper.html()).toMatch('^<html.*');
    });

    then('the page should contain a logo', () => {
      expect(wrapper.find('img').attributes('src')).toBe('logo.png');
    });

    then('the page should have a sidebar menu', () => {
      expect(wrapper.find('aside.q-layout-drawer')).toBeDefined();
      expect(wrapper.find('i.q-icon.fas.fa-bars')).toBeDefined();
    });

    then('the page should have a title bar', () => {
      expect(wrapper.find('div.q-toolbar-title')).toBeDefined();
    });

    then('the title bar should contain the words "My New Application"', () => {
      expect(wrapper.find('div.q-toolbar-title').text()).toBe('My New Application');
    });
  });
});
