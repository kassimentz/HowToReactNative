import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('fazer novamente', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
