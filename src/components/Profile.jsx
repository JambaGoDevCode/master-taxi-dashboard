import React from 'react'
import styled from 'styled-components';
import profileImg from '../assets/profilephoto.jpg';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import { cardStyle } from './ReusableStyle';

export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={profileImg} alt="profile image"/>
      </div>
      <div className="title">
        <h2>João Jamba</h2>
        <h5>
          <HiOutlineLocationMarker/> Luanda, AO
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Days at works</h5>
          <h3>28</h3>
        </div>
        <div className="container">
          <h5>Rides</h5>
          <h3>435</h3>
        </div>
        <div className="container">
          <h5>Hours</h5>
          <h3>72</h3>
        </div>
      </div>
    </Section>
  )
}


const Section = styled.section`
  ${cardStyle}

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .image{
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    
    img{
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      boder-radius:20rem;
      transition: 0.5s ease-in-out;
    }

    &:hover{
      img{
        transition: scale(1.1)
      }
    }
  }

  .title{
    text-aling: center;

    h2,h5{
      color: #ffc107;
      letter-spacing: .3rem;
    }
    h5{
      letter-spacing: .2rem;
    }
  }

  .info{
    display: flex;
    gap: 1rem;

    .container{
      text-align: center;
    }
  }
`;