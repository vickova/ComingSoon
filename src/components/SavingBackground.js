import React from 'react';
import styled from 'styled-components';
import GreenBackground from '../images/saving.png';
import Tilt from '../images/tiltphone.png';
import BackTilt from '../images/phoneback.png';
import WhiteScreen from '../images/whiteScreen.png';
import Shadow from '../images/phoneshadow.png';


const SavingsBackground = () => {
  return (
    <SavingsBackgroundStyle GreenBackground={GreenBackground} Tilt={Tilt}>
        <div className='shadow-cover'>
        <div className='images'>
            <div className='first'><img src={WhiteScreen} alt="screen" /></div>
            <img className='second' src={BackTilt} alt="phone" />
        </div>
        <img className='shadow' src={Shadow} alt="sahdow" />
        </div>
    </SavingsBackgroundStyle>
  )
}

const SavingsBackgroundStyle = styled.div`
    background-size:cover;
    background-image:url(${GreenBackground});
    background-repeat:no-repeat;
    height: 600px;
    width:40%;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:4rem 0;
    .shadow-cover{
        position:relative;
        .shadow{
            position:absolute;
            bottom:0px;
        }
    }
    .images{
        display:flex;
        position:relative;
        .first{
            height:500px;
            width:280px;
            background-size:contain;
            background-image:url(${Tilt});
            background-repeat:no-repeat;
            z-index:2;
            padding:.5rem;
            img{
                border-radius:30px;
                margin-left:3px;
                margin-top:7px;
            }
        }
        
        .second{
            margin-left:-200px;
            height:450px;
        }
    }
`
export default SavingsBackground