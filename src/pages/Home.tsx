import React from 'react'
import { Button } from '../components/Button/Button'
import { Flexbox } from '../components/Flexbox/Flexbox'

const Home: React.FC = () => {
  return (
    <div>
      <Flexbox justifyContent="center" alignItems="center" flexDirection="column" debug>
        <Button variant="primary" m="30px">
          hello
        </Button>
        <Button variant="primary" m="30px">
          hello
        </Button>
        <Button variant="primary" m="30px">
          hello
        </Button>
        <Button variant="primary" m="30px">
          hello
        </Button>
      </Flexbox>
      {/* DO THE TYPOGRAPHY PAGE, FROM TARLENT */}
    </div>
  )
}

export default Home
