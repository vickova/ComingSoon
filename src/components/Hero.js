import React from 'react';
import HeroImages from './HeroImages';
import HeroText from './HeroText';
import styled from 'styled-components';
import BlackLogo from '../images/whiteLogo.svg';

const Hero = () => {
  return (
    <HeroStyle>
        <div className='gofrii'>
            <img src={BlackLogo} alt="logo" />
            <h2>GoFrii</h2>
        </div>
        <div className="hero-flex">
            <HeroText/>
            <HeroImages/>
        </div>
    </HeroStyle>
  )
}

const HeroStyle = styled.div`
    background-color:#001540;
    padding:2rem 6rem;
    .gofrii{
        display:flex;
        align-items:center;
        gap:2rem;
        img{
        width:50px;
        height:50px;
        }
        h2{
            font-size:3.5rem;
            color:#FFF;
            font-family:'Poppins', sans-serif;
        }
    }
    .hero-flex{
        display:flex;
        justify-content:space-between;
        gap:5rem;
        margin-top:2rem;
    }
    @media screen and (max-width:980px){
        padding:1rem;
        .gofrii{
            h2{
                font:3rem;
            }
        }
        .hero-flex{
            display:flex;
            flex-direction:column-reverse;
        }
    }
    @media screen and (max-width:680px){
        .gofrii{
            align-items:flex-start;
            h2{
                font-size:2.8rem;
                margin-top:0;
                margin-bottom:4rem;
            }
        }
    }
`
export default Hero