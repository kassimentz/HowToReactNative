import React from 'react';
import App from '../ThumbTutorial';

import renderer from 'react-test-renderer';

it('Snapshot ThumbTutorial', () => {
  const tree = renderer.create(<ThumbTutorial/>).toJSON();
  expect(tree).toMatchSnapshot();
});
