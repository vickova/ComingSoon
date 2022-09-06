import React from 'react';
import styled from 'styled-components';

const PhoneText = ({heading, paragraph}) => {
  return (
    <PhoneTextStyle>
        <div>
            <h2>{heading}</h2>
            <p>{paragraph}</p>
            <button>Join the waiting list</button>
        </div>
    </PhoneTextStyle>
  )
}

const PhoneTextStyle = styled.div`
    text-align:left;
    display:flex;
    align-items:center;
    div{
        p{
            width:60%;
            font-size:1.5rem;
            font-family:'Poppins', sans-serif;
            color:#4f4d4d;
        }
        h2{
            font-size:2.5rem;
            font-family:'Poppins', sans-serif;
            color:#3f3f3f;
        }
        button{
            font-size:1.2rem;
            font-family:'Poppins', sans-serif;
            padding:1rem 2rem;
            background: #001235;
            box-shadow: 0px 0px 1px rgba(117, 131, 142, 0.04), 0px 2px 4px rgba(52, 60, 68, 0.16);
            border-radius: 0px 8px 8px 0px;
            color:#FFF;
            border:none;
            cursor:pointer;
        }
    }
    @media screen and (max-width:680px){
      width:inherit;
      div{
        p{
            font-size:1rem;
        }
        h2{
            font-size:2rem;
        }
        button{
            font-size:1rem;
            padding:.8rem 1.8rem;
        }
      }
    }
`
export default PhoneText