import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home({setAllAvelibleCars, allAvelibleCars}) {
    return (
       <Container>
           <Section 
            title="Model S"
            description="Order Online For Touchlees Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="CUSTOM ORDER"
            rightBtnText="EXISTING INVENTORY"
            setAllAvelibleCars={setAllAvelibleCars}
            allAvelibleCars = {allAvelibleCars}
           />
           <Section 
           title="Model Y"
           description="Order Online For Touchlees Delivery"
           backgroundImg="model-y.jpg"
           leftBtnText="CUSTOM ORDER"
           rightBtnText="EXISTING INVENTORY"
           />
           <Section 
           title="Model 3"
           description="Order Online For Touchlees Delivery"
           backgroundImg="model-3.jpg"
           leftBtnText="CUSTOM ORDER"
           rightBtnText="EXISTING INVENTORY"
           />
           <Section
           title="Lowest Cost Solar Panels In America"
           description="money-back guarantee"
           backgroundImg="solar-panel.jpg"
           leftBtnText="Order now"
           rightBtnText="learn more"
           />
           <Section
           title="Solar For New Riifs"
           backgroundImg="solar-roof.jpg"
           description="Solar Roof Costs Less Then a New Roof Plus Solar Panels"
           leftBtnText="Order now"
           rightBtnText="learn more"
           />
           <Section 
           title="Accessories"
           leftBtnText="shop now"
           backgroundImg="accessories.jpg"
           />
       </Container>
    )
}

export default Home

const Container = styled.div`
height: 100vh
width:100vw;
`
