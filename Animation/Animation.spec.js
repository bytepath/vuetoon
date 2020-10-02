/* eslint-disable no-unused-expressions */
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Animation from "./Animation";

const localVue = createLocalVue();

/** ****************
 * SETUP
 **************** */
let modules;
let store;
let mocks;
let propsData;
let options;

const defaultValue = () => new Promise((resolve) => {
  modules = {};

  //store = new Vuex.Store({ modules });

  mocks = {};

  propsData = {};

  options = { mocks, localVue, propsData };
  resolve();
});

/** ****************
 * TESTS
 **************** */
describe('KeyframeAnimation.vue', () => {
  beforeEach(defaultValue);

  it('can be mounted', () => {
    const wrapper = shallowMount(Component, options);
    expect(wrapper.isVueInstance()).to.be.true;
  });

  it('can accept an animation via anim prop stirng', () => {
    const wrapper = shallowMount(Component, options);
    expect(true).to.be.false;
  });

  it('can accept an animation via anim prop object', () => {
    const wrapper = shallowMount(Component, options);
    expect(true).to.be.false;
  });
});

