import React from 'react';
import Bits from '../components/Bits';
import BitsFlip from '../components/BitsFlip';
import styled from 'styled-components';


const Pay = () => {
  return (
    <PayStyle>
        <h3>Send cash to people and businesses in the quickest <br/>and most convinient way</h3>
        <Bits heading='Peer-to-Peer' paragraph='Transfer money to anyone on GoFrii and they get it immediately'/>
        <BitsFlip heading='Pay Bills' paragraph='Never get disconnected. Find and settle all your bills in one place'/>
        <Bits heading='Pay Securely' paragraph='Your funds are always protected when you pay with GoFrii.'/>
        <BitsFlip heading='One App to View all' paragraph='Monitor all your transactions with GoFrii app, all in one place'/>
    </PayStyle>
  )
}

const PayStyle = styled.div`
    h3{
        text-align:center;
        font-size:1.5rem;
        margin:5rem .5rem;
        color:#4f4d4d;
    }
`
export default Pay