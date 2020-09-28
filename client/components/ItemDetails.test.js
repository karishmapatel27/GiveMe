import React from 'react'

import renderer from 'react-test-renderer'

import ItemDetails from './ItemDetails'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ItemDetails/>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
