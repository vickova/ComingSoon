import React from 'react';
import styled from 'styled-components';

const HeroText = () => {
  return (
    <HeroTextStyle>
        <h2>GoFrii your final <br/>bustop that pays <br/>you.</h2>
        <p>Join  about 2 milion people who save, loan and <br/>invest 
            <br/>with GoFrii app.  No commission on any payback <br/>you make.
        </p>
        <form action="">
            <input type="email" placeholder="Your Email Address"/>
            <button>Join the waiting list</button>
        </form>
    </HeroTextStyle>
  )
}

const HeroTextStyle = styled.div`
    h2{
        font-size: 3rem;
        color:#FFF;
        line-height:4rem;
        font-family:'Poppins', sans-serif;
    }
    p{
        color: #fff;
        font-size:1.5rem;
        line-height:2rem;
        font-family:'Poppins', sans-serif;
    }
    form{
        display:flex;
        margin: 5rem 0;
        input{
            padding: 1rem;
            width: 65%;
            height:30px;
            font-size:1.2rem;
            outline:none;
            font-family:'Poppins', sans-serif;
        }
        button{
            border:none;
            background: #2B3C60;
            border-radius: 0 10px 10px 0;
            padding: 1rem;
            font-size:1.2rem;
            width:45%;
            cursor:pointer;
            color:#FBFBFB;
            font-family:'Poppins', sans-serif;
        }
    }
`
export default HeroText