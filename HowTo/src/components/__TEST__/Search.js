import React from 'react';
import App from '../Search';

import renderer from 'react-test-renderer';

it('Snapshot Search', () => {
  const tree = renderer.create(<Search/>).toJSON();
  expect(tree).toMatchSnapshot();
});
