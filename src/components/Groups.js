import React from 'react';
import GroupBit from '../components/GroupBit';
import GroupBitFlip from '../components/GroupBitFlip';
import styled from 'styled-components';

const Groups = () => {
  return (
    <GroupStyle>
        <h3>Manage cash and expenses as a group. Set rules for each person and more</h3>
        <GroupBit heading='Rotational Saving' paragraph='Transfer money to anyone on GoFrii and they get it immediately'/>
      <GroupBitFlip heading='Community Savings' paragraph='Transfer money to anyone on GoFrii and they get it immediately'/>
      <GroupBit heading='Project Savings' paragraph='Your funds are always protected when you pay with GoFrii.'/>
      <GroupBitFlip heading='One App to View all' paragraph='Monitor all your transactions with GoFrii app, all in one place'/>
    </GroupStyle>
  )
}

const GroupStyle = styled.div`
    h3{
        text-align:center;
        font-size:1.5rem;
        margin:5rem 0;
        color:#4f4d4d;
    }
`
export default Groups;