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
    .phone{
        background-size:contain;
        background-repeat:no-repeat;
        width:250px;
        height: 550px;
        display:flex;
        justify-content:center;
        -webkit-justify-content:center;
        align-items:center;
        img{
            border-radius: 30px;
            width: 75%;
        }
        
    }
    .leftphone{
        background-image:url(${LeftPhone});
    }
    .middlephone{
        background-image:url(${LeftPhone});
        margin-top: 10%;
        margin-left:-30px;
        z-index:2;
        img{
            margin:5rem 0;
        }
    }
    .rightphone{
        background-image:url(${RightPhone});
        margin-top:5%;
        justify-content:flex-start;
        margin-left:-40px;
        img{
        width:80%;
        margin-left:.5rem;
        }
    }
`

export default HeroImages;