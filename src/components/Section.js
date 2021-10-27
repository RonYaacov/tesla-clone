import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import {store} from '../app/store';
import {carAdded} from '../features/actions'





const Section = ({title,
     description, 
     leftBtnText, 
     rightBtnText,
     backgroundImg,
     setAllAvelibleCars,
     allAvelibleCars}) => {
        
    const nonReduxCarAdded = () =>{
        setAllAvelibleCars([...allAvelibleCars,  ["Model V"]])// hard codded POC
    }

    return (
        <Container bgImg={backgroundImg}>
            <Fade down>
            <ModelText>
                <h1>
                   {title}
                </h1>
                <p>
                    {description}             
                </p>
            </ModelText>
            </Fade>
            <Buttons>
            <Fade down>
            <ButtonGroup>
            
                <LeftButton > 
                    {leftBtnText}
                </LeftButton>
                {rightBtnText &&
                    <RightButton href="https://www.tesla.com/inventory/new/ms">
                    {rightBtnText}
                    </RightButton>
                }
                
            </ButtonGroup>
            </Fade>
            <DownArrow src="\images\down-arrow.svg" />
            </Buttons>

        </Container>

    )
}

export default Section


 const Container = styled.div`
    width: 100vw;
    height: 100vh;   
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url('/images/${props.bgImg}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


 `

 const ModelText = styled.div`
    margin-top: 25%;
    color:rgb(41, 37, 37);
    font-family:sans-serif;
    font-weight: 600;
 `

const Buttons = styled.div`
`

 const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 20px;
    @media (max-width: 768px){
        flex-direction: column;
    }
 
 `

 const LeftButton = styled.a`
    background-color: rgb(58, 55, 55);
     color:white;
     display: flex;
     justify-content: center;
     align-items: center;
     height: 30px;
     width: 200px;
     border: black;
     box-shadow: blue;
     border-radius: 100px;
     opacity: 0.78;
     text-transform: uppercase;
     font-size: 11px;
     cursor: pointer;
     margin: 2% ;
   
 `

 const RightButton = styled(LeftButton)`
    background-color: rgb(231, 227, 220);
    color: black;
    opacity: 0.7;

 `

 const DownArrow = styled.img`
    margin-top: 20px;
    height: 20%;
    width: 20% ;
    cursor: pointer;
    animation: animationDown infinite 1.5s;
 `
