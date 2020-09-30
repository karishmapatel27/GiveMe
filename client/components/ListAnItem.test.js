import React from 'react'

import renderer from 'react-test-renderer'

import ListAnItem from './ListAnItem'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ListAnItem />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
