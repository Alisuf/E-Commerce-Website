import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
height: 30px;
background-color: teal;
color: black;
display: flex;
align-item: center;
justify-content: center;
font-weight: bold;
font-size: 15;
`

const Announcement = () => {
  return (
    <Container>
        Get Premium Clothing Now @ 20% OFF
    </Container>
  )
}

export default Announcement