import React from 'react';
import LoanBackground from './LoanBackground';
import PhoneText from './PhoneText';
import styled from 'styled-components';

const LoanBitFlip = ({heading, paragraph,Background}) => {
  return (
    <LoanBitFlipStyle>
        <PhoneText heading={heading} paragraph={paragraph}/>
        <LoanBackground GreenBackground={Background}/>
    </LoanBitFlipStyle>
  )
}

const LoanBitFlipStyle = styled.div`
    margin: 2rem 5rem;
    display:flex;
    justify-content:space-between;
`
export default LoanBitFlip