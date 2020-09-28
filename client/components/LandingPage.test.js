import React from 'react'
import { HashRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import LandingPage from './LandingPage'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <HashRouter>
        <LandingPage/>
      </HashRouter>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
