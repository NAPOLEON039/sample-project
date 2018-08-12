import Vue from 'vue';
import { mount } from '@vue/test-utils'; //mount is imported to create an instance of a component
import TestComponent from '../src/components/Test';

describe ('Tests for Test.vue', () => {
    let wrapper = mount(TestComponent); //creating an instance of our component (mounting). Instead of making changes to the component,
    //we will make changes to it's instance

    //first test case
    it('Data property is toggled', () => {
        //setting data property
        wrapper.setData({content: true})

        //finding the corresponding button and clicking it
        wrapper.find('#toggle').trigger('click');

        //expecting result
        expect(wrapper.vm.content).toBe(true);
    });

    //second test case
    it('Function is called logging text to console', () => {
        //mocking a function
        const logSomeTextStub = jest.fn();
        wrapper.setMethods({
            logSomeText: logSomeTextStub
        });

        //find button and simulate a click
        wrapper.find('#log').trigger('click');

        //expect function to be called
        expect(logSomeTextStub).toBeCalled();
    })
})
