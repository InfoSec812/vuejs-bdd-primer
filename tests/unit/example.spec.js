import Router from "vue-router";
import Quasar from "quasar";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Default from "src/layouts/Default.vue";

describe("Default.vue", () => {
  let localVue = createLocalVue();
  localVue.use(Router);
  localVue.use(Quasar);
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Default, { localVue });
    expect(wrapper.text()).toMatch(/.*Quasar.*/);
  });
});
