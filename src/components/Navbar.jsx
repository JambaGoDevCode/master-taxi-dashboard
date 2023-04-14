import React from 'react'
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi'

export default function Navbar() {
  return (
    <Nav>
      <div className='title'>
        <h4>Hi Jamba</h4>
        <h1>Welcome to <span>My Taxi Dashboard</span></h1>
      </div>
      <div className='search'>
        <BiSearch/>
        <input type="text" placeholder='Search' />
      </div>
    </Nav>
  )
}


/* Style component */
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #fff;

  .title{
    h1{
      span{
        margin-left: 0.5rem;
        color: #ffc107;
        letter-spacing:.3rem;
      }
    }
  }

  .search{
    background-color: #333;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;

    svg{
      color: #ffc107;
    }

    input{
      background-color: transparent;
      border: none;
      color: #ffc107;
      letter-spacing: .3rem;

      &:: placeholder{
        color: #ffc107;
      }
      &:: focus{
        outline: none;
      }
    }
  }
`;
