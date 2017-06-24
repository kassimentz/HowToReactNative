import React from 'react';
import App from '../InputText';

import renderer from 'react-test-renderer';

it('Snapshot InputText', () => {
  const tree = renderer.create(<InputText/>).toJSON();
  expect(tree).toMatchSnapshot();
});
