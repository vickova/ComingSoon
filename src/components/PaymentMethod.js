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
        width: 70vw;
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
`
export default PaymentMethod