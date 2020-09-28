import React from 'react'

import renderer from 'react-test-renderer'

import CategoriesMenu from './CategoriesMenu'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <CategoriesMenu/>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
