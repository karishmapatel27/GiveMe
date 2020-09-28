import React from 'react'
import renderer from 'react-test-renderer'

import { UserProvider } from './UserContext'

it('renders correctly', () => {
  const tree = renderer
    .create(

      <UserProvider>
        <div>
              this is a child
        </div>
      </UserProvider>

    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
