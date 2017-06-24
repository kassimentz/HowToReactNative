import React from 'react';
import App from '../InputText';

import renderer from 'react-test-renderer';

it('Renders InputText', () => {
  const tree = renderer.create(<InputText/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders With Placeholder', () => {
  const content = 'test';
  const tree = renderer.create(<InputText placeholder={content}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
