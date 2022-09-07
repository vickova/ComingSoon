import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const PaymentMethod = () => {
    const {pathname} = useLocation();
    console.log(pathname)
  return (
    <PaymentStyle>
        <div className='pay-flex'>
        <ul>
            <li id={pathname === '/'? 'selected': ''} style={{backgroundColor:pathname==='/'? '#53A953': 'transparent'}}><Link to='/'>Payments</Link></li>
            <li id={pathname === '/loan'? 'selected': ''} style={{backgroundColor:pathname==='/loan'? '#2B3C60': 'transparent'}}><Link to='/loan'>Loan</Link></li>
            <li id={pathname === '/groups'? 'selected': ''} style={{backgroundColor:pathname==='/groups'? '#2A552A': 'transparent'}}><Link to='/groups'>Groups</Link></li>
            <li id={pathname === '/savings'? 'selected': ''} style={{backgroundColor:pathname==='/savings'? '#000E2B': 'transparent'}}><Link to='/savings'>Savings</Link></li>
        </ul>
        </div>
    </PaymentStyle>
  )
}

const PaymentStyle = styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0;
    .pay-flex{
        color:#222121;
        ul{
            background-color: #bfbfbf;
            display:flex;
            justify-content:space-between;
            padding: 1rem;
            border-radius: 50px;
            li{
                width:150px;
                list-style:none;
                font-size: 1.2rem;
                padding:1rem 1.5rem;
                font-family:'Poppins', sans-serif;
                display:flex;
                justify-content:center;
                a{
                    text-decoration:none;
                    color:#4f4d4d;
                }
            }
            #selected{
                border-radius:30px;
                a{
                color: #FFF;
                }
            }
        }
    }
    @media screen and (max-width:980px){
        margin:1rem;
        .pay-flex{
            margin:1rem 2rem;
            ul{
                width:90%;
                li{
                    font-size:1rem;
                    padding: 0.5rem 1rem;;
                }
            }
        }
    }

    @media screen and (max-width:700px){
        .pay-flex{
            margin:0;
            ul{
                background-color:inherit;
                display:grid;
                grid-template-columns:1fr 1fr;
                li{
                    width: 100px;
                }
            }
            
        }
    }
`
export default PaymentMethod