import React from 'react';
import PhoneBackground from './PhoneBackground';
import PhoneText from './PhoneText';
import styled from 'styled-components';

const BitsFlip = ({heading, paragraph,Background}) => {
  return (
    <BitFlipStyle>
        <PhoneText heading={heading} paragraph={paragraph}/>
        <PhoneBackground GreenBackground={Background}/>
    </BitFlipStyle>
  )
}

const BitFlipStyle = styled.div`
    margin: 2rem 5rem;
    display:flex;
    justify-content:space-between;
    gap:3rem;
    @media screen and (max-width:980px){
      display:flex;
      flex-direction: column-reverse;
      margin:2rem 1rem;
    }
`
export default BitsFlip