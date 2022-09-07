import React from 'react';
import styled from 'styled-components';
import RightPhone from '../images/rightphone.png';
import LeftPhone from '../images/leftphone.png';
import MiddlePhone from '../images/tiltphone.png';
import LeftScreen from '../images/leftScreen.png';
import RightScreen from '../images/rightScreen.png';
import BlueScreen from '../images/Screen.png';


const HeroImages = () => {
  return (
    <HeroImagesStyle RightPhone={RightPhone} LeftPhone={LeftPhone} MiddlePhone={MiddlePhone}>
        <div className='phone leftphone'>
            <img src={LeftScreen} alt="whitescreen" />
        </div>
        <div className='phone middlephone'>
            <img src={BlueScreen} alt="whitescreen" />
        </div>
        <div className='phone rightphone'>
            <img src={RightScreen} alt="whitescreen" />
        </div>
    </HeroImagesStyle>
  )
}

const HeroImagesStyle = styled.div`
    display:flex;
    justify-content:center;
    width:60%;
    .phone{
        background-size:contain;
        background-repeat:no-repeat;
        width:250px;
        height: fit-content;
        display:flex;
        justify-content:center;
        -webkit-justify-content:center;
        align-items:flex-end;
        img{
            border-radius: 30px;
            margin-left:-5px;
            width:75%;
        }
        
    }
    .leftphone{
        background-image:url(${LeftPhone});
    }
    .middlephone{
        background-image:url(${LeftPhone});
        margin-left:-30px;
        margin-top:50px;
        z-index:2;
        
    }
    .rightphone{
        background-image:url(${RightPhone});
        justify-content:flex-start;
        margin-left:-40px;
    }
    @media screen and (max-width:980px){
      width:100%;
    }
    @media screen and (max-width:680px){
        .phone{
            img{
                border-radius:20px;
                margin-left:0;
            }
        }
    }
`

export default HeroImages;