import React from 'react'
// import { HashRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import Nav from './Nav'

it('renders correctly', () => {
  const tree = renderer
    .create(
    //  ? <HashRouter>
      <Nav/>
    //   </HashRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
