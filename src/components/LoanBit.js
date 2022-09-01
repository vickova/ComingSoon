import React from 'react';
import LoanBackground from './LoanBackground';
import PhoneText from './PhoneText';
import styled from 'styled-components';

const LoanBit = ({heading, paragraph}) => {
  return (
    <LoanBitStyle>
        <LoanBackground/>
        <PhoneText heading={heading} paragraph={paragraph}/>
    </LoanBitStyle>
  )
}

const LoanBitStyle = styled.div`
    margin: 2rem 5rem;
    display:flex;
    justify-content:space-between;
`
export default LoanBit