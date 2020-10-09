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
let div;

const DefaultVector = () => new Promise((resolve) => {
    div = document.createElement('svg');
    div.id= "root";
    document.body.appendChild(div);

    mocks = {};

    propsData = {};

    let slots = {
      default: '<rect x="0" y="0" width="69" height="96"></rect>',
    };

    options = { slots, mocks, localVue, propsData, stubs: { transition: false }, attachTo: '#root' };
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

    //describe("Viewbox behaviour", () => {
    //    when("Vector is the top level svg element", () => {
            // it("shows viewport by default", () => {
            //   const wrapper = mount(Component, options);
            //   wrapper.vm.$nextTick(() => {
            //     expect(wrapper.vm.shouldShowViewbox).to.equal(true);
            //   });
            // });

            it("shows viewport if show-viewport prop = true", () => {
                DefaultVector().then(() => propsData.showViewbox = true).finally(() => {
                  const wrapper = mount(Component, options);
                    wrapper.vm.$nextTick().then(() => {

                      console.log(wrapper.find("svg").attributes());//$children[0].$data.assetDimensions);


                      });
                      //wrapper.find("svg").attributes();
                  //    console.log(wrapper.vm.$el);//$children[0].$data.assetDimensions);
                   });

        });

});

