import React from 'react';
import BlackLogo from '../images/BlackLogo.svg';
import FaceBook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import Instagram from '../images/Instagram.svg';
import LinkedIn from '../images/linkedin.png';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyle>
        <div className="sections">
            <ul>
                <li>FAQs</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Contact Us</li>
            </ul>
            <h3 className='frii'>(c) 2022 GoFrii</h3>
            <p>Once you finally have someone's ear, it's important to sound like an expert</p>
            <div className='logo'>
                <img src={BlackLogo} alt="logo" />
                <h3>GoFrii</h3>
            </div>
            <div className='image-icon'>
                <img src={FaceBook} alt="facebook" />
                <img src={Twitter} alt="twitter" />
                <img src={Instagram} alt="instagram" />
                <img src={LinkedIn} alt="linkedin" />
            </div>
        </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
    display:flex;
    justify-content:center;
    .sections{
        text-align:center;
        width: 85%;
        ul{
            display:flex;
            justify-content:center;
            gap:3rem;
            li{
                font-size:1.2rem;
                list-style:none;
                background-color: #D4D4D4;
                padding:1.5rem 3rem;
                border-radius:40px;
                font-family:'Poppins', sans-serif;
                cursor:pointer;
                color:#585858;
            }
        }
        .logo{
            display:flex;
            justify-content:center;
            gap:1rem;
            img{
                width:40px;
                height:40px;
            }
            h3{
                color:#585858;
            }
        }
        .frii{
            margin: 3rem 0;
            color:#040404;
        }
        p{
            font-size:1.2rem;
            margin:2rem 0;
            font-family:'Poppins', sans-serif;
            color:#585858;
        }
        .image-icon{
            display:flex;
            justify-content:center;
            gap:1.5rem;
            margin:2rem 0;
            img{
                width:35px;
                height:35px;
            }
        }
    }
    @media screen and (max-width:980px){
        .sections{
            width:100%;
            ul{
                gap:1rem;
                padding:0;
                li{
                    padding:1rem 1.5rem;
                }
            }
        }
    }
    @media screen and (max-width:680px){
        .sections{
            ul{
                li{
                    padding:.8em 1.5rem;
                    width:fit-content;
                    font-size:1rem;
                }
            }
            .image-icon{
                img{
                    width:20px;
                    height:20px;
                }
            }
            p{
                font-size:1rem;
            }
        }
    }
    @media screen and (max-width:480px){
        .sections{
            ul{
                padding:1.5rem;
                flex-wrap:wrap;
                display:grid;
                grid-template-columns:1fr 1fr;
                
            }
            p{
                margin: 2rem;
            }
        }
    }
`
export default Footer