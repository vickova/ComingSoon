import React from 'react';
import Apple from '../images/apple.png';
import GooglePlay from '../images/googleplay.svg';
import Blue from '../images/soon.png';
import styled from 'styled-components';


const Soon = () => {
  return (
    <SoonStyle Blue={Blue}>
        <div className='soon-center'>
            <h2>Coming Soon</h2>
            <p>Join about 2 millin people who save, loan, pay and invest <br/>in GoFrii app. No commission on any payback you made</p>
            <div className='buttons'>
                <button><img src={Apple} alt="apple" /> <span>App Store</span></button>
                <button><img src={GooglePlay} alt="apple" /> <span>Google Play</span></button>
            </div>
        </div>
    </SoonStyle>
  )
}

const SoonStyle = styled.div`
    display:flex;
    justify-content:center;
    margin: 5rem 0;
    .soon-center{
        background-size:cover;
        background-image:url(${Blue});
        background-repeat:no-repeat;
        padding:3rem 4rem;
        text-align:center;
        border-radius:20px;
        width: 85%;

        h2{
            font-size:2.5rem;
            color:#FFF;
        }
        p{
            font-size:1.5rem;
            line-height:2rem;
            color:#FFF;
        }
        .buttons{
            display:flex;
            align-items:center;
            justify-content:center;
            gap:3rem;
            margin:3rem 0;
            button{
                padding:1rem 2.2rem;
                border-radius:30px;
                display:flex;
                align-items:center;
                gap:1rem;
                border:none;
                font-family:'Poppins', sans-serif;
                font-size:1.2rem;
                cursor:pointer;
                img{
                    width:25px;
                    height:25px;
                }
            }
        }
    }
`
export default Soon