import React from 'react'

import renderer from 'react-test-renderer'

import BrowseListings from './BrowseListings'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowseListings/>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
