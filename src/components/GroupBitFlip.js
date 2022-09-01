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
`
export default GroupBitFlip;