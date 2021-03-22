import React, { FC } from 'react';
import { mount } from 'enzyme';
import UrlForm from './UrlForm';

describe('UrlForm', () => {
  it('should accept properly formatted urls', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(<UrlForm onSubmit={onSubmit} />);
    wrapper.find('input').simulate('change', { target: { value: 'http://example.com' } });
    wrapper.find('button').simulate('click');
    expect(onSubmit.mock.calls.length).toBe(1);
  });

  it('should not submit a badly formatted url', () => {
    const onSubmit = jest.fn();
    const wrapper = mount(<UrlForm onSubmit={onSubmit} />);
    wrapper.find('input').simulate('change', { target: { value: 'http://example' } });
    wrapper.find('button').simulate('click');
    expect(onSubmit.mock.calls.length).toBe(0);
  });
});
