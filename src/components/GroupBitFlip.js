import React from 'react';
import GroupRedBackground from './GroupRedBackground';
import PhoneText from './PhoneText';
import styled from 'styled-components';

const GroupBitFlip = ({heading, paragraph}) => {
  return (
    <GroupBitFlipStyle>
        <PhoneText heading={heading} paragraph={paragraph}/>
        <GroupRedBackground/>
    </GroupBitFlipStyle>
  )
}

const GroupBitFlipStyle = styled.div`
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
export default GroupBitFlip;