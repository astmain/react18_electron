import React from 'react'
import { Button } from 'antd'

function name(params) {
  console.log('111---:', 111)
}

const About = () => {
  return (
    <div>
      <h1>关于</h1>

      <Button type="primary" onClick={name}>
        点击我
      </Button>
    </div>
  )
}

export default About
