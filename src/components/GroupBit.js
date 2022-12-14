import React from 'react';
import GroupBackground from './GroupBackground';
import Background from './PhoneBackground';
import PhoneText from './PhoneText';
import styled from 'styled-components';

const GroupBit = ({heading, paragraph}) => {
  return (
    <GroupBitStyle>
        <GroupBackground GreenBackground={Background}/>
        <PhoneText heading={heading} paragraph={paragraph}/>
    </GroupBitStyle>
  )
}

const GroupBitStyle = styled.div`
    margin: 2rem 5rem;
    display:flex;
    justify-content:space-between;
    gap:3rem;
    @media screen and (max-width:980px){
      display:block;
      margin:2rem 1rem;
    }
`
export default GroupBit