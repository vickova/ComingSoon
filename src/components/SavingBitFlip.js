import React from 'react';
import SavingsBackground from './SavingBackground';
import PhoneText from './PhoneText';
import styled from 'styled-components';

const SavingsBitFlip = ({heading, paragraph,Background}) => {
  return (
    <SavingsBitFlipStyle>
        <PhoneText heading={heading} paragraph={paragraph}/>
        <SavingsBackground GreenBackground={Background}/>
    </SavingsBitFlipStyle>
  )
}

const SavingsBitFlipStyle = styled.div`
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
export default SavingsBitFlip