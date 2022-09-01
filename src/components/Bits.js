import React from 'react';
import PhoneBackground from './PhoneBackground';
import Background from './PhoneBackground';
import PhoneText from './PhoneText';
import styled from 'styled-components';

const Bits = ({heading, paragraph}) => {
  return (
    <BitStyle>
        <PhoneBackground GreenBackground={Background}/>
        <PhoneText heading={heading} paragraph={paragraph}/>
    </BitStyle>
  )
}

const BitStyle = styled.div`
    margin: 2rem 5rem;
    display:flex;
    justify-content:space-between;
`
export default Bits