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
`
export default BitsFlip