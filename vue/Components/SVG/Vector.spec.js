/* eslint-disable */
import {shallowMount, done, mount, createLocalVue, nextTick } from '@vue/test-utils';
import Component from "./Vector";
import {expect} from "chai";

const localVue = createLocalVue();

// Shortcuts
let when = (str, callback) => describe(`when ${str}`, callback);
let and = (str, callback) => describe(`and ${str}`, callback);
let use = beforeEach;
let shallow = shallowMount;


/** ****************
 * SETUP
 **************** */
let mocks;
let propsData;
let options;

const DefaultVector = () => new Promise((resolve) => {
    mocks = {};

    propsData = {};

    options = {mocks, localVue, propsData};
    resolve();
});

/** ****************
 * TESTS
 **************** */
describe('Vector.vue', () => {
    use(DefaultVector);

    // it('can be mounted', () => {
    //   const wrapper = shallow(Component, options);
    //   expect(wrapper.exists()).to.equal(true);
    // });
    //
    // it("sets overflow visible by default", () => {
    //   const wrapper = shallow(Component, options);
    //   expect(wrapper.find("svg").attributes()["overflow"]).to.equal("visible");
    // });

    describe("Viewbox behaviour", () => {
        when("Vector is the top level svg element", () => {
            it("shows viewport by default", () => {
              const viewbox = shallow(Component, options).find("svg").attributes()["viewBox"];
              expect(viewbox).to.exist;
            });

            it("shows viewport if show-viewport prop = true", () => {
                DefaultVector().then(() => propsData.showViewbox = true).finally(() => {
                  const wrapper = mount(Component, options);
                  wrapper.vm.$nextTick().then(() => {
                    expect(wrapper.vm.shouldShowViewbox).to.equal(true);
                  });
                });
            });
        });
    });

});

