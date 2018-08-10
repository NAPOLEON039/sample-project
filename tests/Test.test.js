import Vue from 'vue';
import { mount } from '@vue/test-utils';
import TestComponent from '../src/components/Test';

describe ('Tests for Test.vue', () => {
    let wrapper = mount(TestComponent);

    it('Data property is toggled', () => {
        wrapper.setData({content: true})
        wrapper.find('#toggle').trigger('click');
        expect(wrapper.vm.content).toBe(false);
    });
    it('Function is called logging text to console', () => {
        const logSomeTextStub = jest.fn();
        wrapper.setMethods({
            logSomeText: logSomeTextStub
        });
        wrapper.find('#log').trigger('click');
        expect(logSomeTextStub).toBeCalled();
    })
})