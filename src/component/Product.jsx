import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
flex: 1;
margin: 2;
min-width:380px;
heigh: 100px;
display: flex;
align-items: center;
justify-content: center;
position:relative;

`
const Circle = styled.div``
const Image = styled.img`
height: 40%;
object-fit: fit;
padding-left: 35px;
z-index: 2;
`
const Info = styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
display: flex;
z-index: 3;
justify-content: center;
align-items: center;

`
const Icon = styled.div`
width: 40px;
height:40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
transition: all 0.5s ease ; 
&:hover {
  transform: scale(1.1);
}


`




const Product = ({item}) => {
  return (
<Container>
  <Circle/>
  <Image src ={item.img}/>
  <Info>
    <Icon>
      <ShoppingCartCheckoutOutlined/>
    </Icon>
    <Icon>
      <SearchOutlined/>
    </Icon>
    <Icon>
      <FavoriteBorderOutlined/>
    </Icon>
  </Info>

</Container>

    )
}

export default Product