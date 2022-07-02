import React from 'react'

import { ExampleComponent, Greet } from 'test-lib'
import 'test-lib/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text='Create React Library Example 😄' />
      <Greet name='Varun' />
    </>
  )
}

export default App
