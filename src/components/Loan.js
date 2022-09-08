import React from 'react';
import LoanBits from '../components/LoanBit';
import LoanBitsFlip from '../components/LoansBitFlip';
import styled from 'styled-components';

const Loan = () => {
  return (
    <LoanStyle>
        <h3>Send cash to people and businesses in the quickest <br/>and most convinient way</h3>
        <LoanBits heading='Peer-to-Peer' paragraph='Transfer money to anyone on GoFrii and they get it immediately'/>
        <LoanBitsFlip heading='Peer-to-Peer' paragraph='Transfer money to anyone on GoFrii and they get it immediately'/>
        <LoanBits heading='Pay Securely' paragraph='Your funds are always protected when you pay with GoFrii.'/>
        <LoanBitsFlip heading='One App to View all' paragraph='Monitor all your transactions with GoFrii app, all in one place'/>
    </LoanStyle>
  )
}

const LoanStyle = styled.div`
    h3{
        text-align:center;
        font-size:1.5rem;
        margin:5rem .5rem;
        color:#2E2E2E;
    }
`
export default Loan;