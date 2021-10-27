import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import {store} from '../app/store';
import { StarRateTwoTone } from '@material-ui/icons';

export function Header(
    {
        allAvelibleCars
    }){
    const [navMenuStatus, setNavMenuStatus] = useState(false)
    const [avelibleCars, setAvelibleCars] = useState(store.getState().cars.map(car => car.carName))

    const switchRightMenuTugle = () =>{
        setNavMenuStatus(!navMenuStatus)
    }
 
    
   let cars = store.getState().cars.map(car => car.carName)
   cars = allAvelibleCars
    return (
       <Container>
           <a>
               <img src="\images\logo.svg"/>
           </a>
           <Menu>
               {cars? cars.map((car, index)=>(
                     <a key ={index} href="#">{car}</a>
               )):null}
                    
           </Menu>
            <RightMenu>
                <a>SHOP</a>
                <a href="#">TESLA ACCOUNT</a>
            </RightMenu>
            <MenuButton onClick={() => switchRightMenuTugle()}></MenuButton>
           
                <NavMenu animate={{x:!navMenuStatus? '0':'-60vw'}} >
                <CloseWrapper><CloseButton onClick={() => switchRightMenuTugle()} /></CloseWrapper>
                {cars ? cars.map((car, index)=>(
                    <li> <a key={index} href="#">{car}</a></li>
                )):null}
                <li> <a href="#">Existing Inventory</a></li>
                <li> <a href="#">Used Inventory</a></li>
                <li> <a href="#">Trade-in</a></li>
                <li> <a href="#">Cybertruck</a></li>
                <li> <a href="#">Roadaster</a></li>
                <li><a href="#">Add Test Tesla Car</a></li>
            </NavMenu> 
            
         
           
           </Container>
       
    )
}

export default Header

const Container = styled.div`
    display: flex;
    color: black;
    min-height: 60px;
    position: fixed;
    font-size: 130%;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    top: 0;
    left: 0;
    right:0;
    z-index: 2;
    
    a{
        color: black;
        font-weight: 450;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
        
    }

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content:  center;
    color: black;
    flex: 1;
    padding-left: 6%;

    @media(max-width: 1000px){
        font-size: 80%
    }
    @media(max-width: 850px){
        font-size: 70%
    }
    @media(max-width: 790px){
        display: none;
    }
`

const RightMenu = styled.div`
    @media(max-width: 750px){
        font-size: 50%
    }
    @media(max-width: 1000px){
        font-size: 80%
    }
    a{
        font-weight: 450;
    }
`

const MenuButton = styled(MenuIcon)`
    cursor: pointer;
    



`

const NavMenu = styled(motion.div)`
    position: fixed;
    top:0;
    right:-60vw;
    width: 300px;
    font-size: 70%;
    border-radius: 5%;
    z-index: 4;
    background-color: white;
    list-style: none;
    padding: 20px ;
    display: flex;
    flex-direction: column;
    text-align: start;
   
    li{
        padding: 15px 0;
        border-bottom: 1.5px solid rgb(0, 0, 0);
        a{
            font-weight: 100;
        }

    }

`

const CloseButton = styled(CloseIcon)`
    cursor: pointer;

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
