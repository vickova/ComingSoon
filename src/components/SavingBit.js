import React from 'react';
import SavingsBackground from './SavingBackground';
import Background from './PhoneBackground';
import PhoneText from './PhoneText';
import styled from 'styled-components';

const SavingsBit = ({heading, paragraph}) => {
  return (
    <SavingsBitStyle>
        <SavingsBackground GreenBackground={Background}/>
        <PhoneText heading={heading} paragraph={paragraph}/>
    </SavingsBitStyle>
  )
}

const SavingsBitStyle = styled.div`
    margin: 2rem 5rem;
    display:flex;
    justify-content:space-between;
`
export default SavingsBit