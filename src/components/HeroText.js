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
        height:60px;
        input{
            padding:.5rem 1rem;
            font-size:1rem;
            width:55%;
            outline:none;
            font-family:'Poppins', sans-serif;
        }
        button{
            border:none;
            background: #2B3C60;
            border-radius: 0 10px 10px 0;
            padding:.5rem 1rem;
            font-size:1rem;
            width:35%;
            cursor:pointer;
            color:#FBFBFB;
            font-family:'Poppins', sans-serif;
        }
    }
    @media screen and (max-width:980px){
        form{
            width:100%;
            input{
                width:55%;
            }
            button{

            }
        }
    }
    @media screen and (max-width:680px){
        h2{
            font-size:2.5rem;
        }
        form{
            height:50px;
            input{
                font-size:.8rem;
                width:40%;
            }
            button{
                width:40%;
                padding: 0.2rem;
                font-size:.8rem;
            }
        }
    }
`
export default HeroText