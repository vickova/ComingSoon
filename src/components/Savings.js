import React from 'react';
import SavingsBits from '../components/SavingBit';
import SavingsBitsFlip from '../components/SavingBitFlip';
import styled from 'styled-components';

const Savings = () => {
  return (
    <SavingStyle>
        <h3>Save funds in the quickest and most convinient way</h3>
        <SavingsBits heading='Peer-to-Peer' paragraph='Transfer money to anyone on GoFrii and they get it immediately'/>
      <SavingsBitsFlip heading='Peer-to-Peer' paragraph='Transfer money to anyone on GoFrii and they get it immediately'/>
      <SavingsBits heading='Pay Securely' paragraph='Your funds are always protected when you pay with GoFrii.'/>
      <SavingsBitsFlip heading='One App to View all' paragraph='Monitor all your transactions with GoFrii app, all in one place'/>
    </SavingStyle>
  )
}

const SavingStyle = styled.div`
    h3{
        text-align:center;
        font-size:1.5rem;
        margin:5rem .5rem;
        color:#2E2E2E;
    }
`
export default Savings