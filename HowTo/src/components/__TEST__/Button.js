import React from 'react';
import App from '../Button';

import renderer from 'react-test-renderer';

it('fazer novamente', () => {
  const tree = renderer.create(<Btn/>).toJSON();
  expect(tree).toMatchSnapshot();
});
