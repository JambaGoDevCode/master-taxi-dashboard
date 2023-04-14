import React from 'react';
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/profilephoto.jpg";
import { cardStyle } from './ReusableStyle';


export default function Transfers() {
  const transactions = [
    {
      image: avatarImage,
      name: "João Jamba",
      time: "Today, 12:15",
      amount: "+$50",
    },
    {
      image: avatarImage,
      name: " O programador",
      time: "Today, 16:35",
      amount:"-$35",
    },
    {
      image: avatarImage,
      name: " Jamba GoDevCode",
      time: "Yesterday, 06:38",
      amount:"+$345",
    },
  ];


  return (
    <Section>
      <div className="title">
        <h2>Your Transfers</h2>
      </div>
      <div className="transactions">
        {transactions.map((transactions, index)=>{
          return (
            <div className="transaction" key={index}>
              <div className="transaction__title">
                <div className="transaction__title__image">
                  <img src={transactions.image} alt="transaction image" />
                </div>
                <div className="transaction__title__details">
                  <h3>{transactions.name}</h3>
                  <h5>{transactions.time}</h5>
                </div>
              </div>
              <div className="transaction__amount">
                <span>{transactions.amount}</span>
              </div>
            </div>
          )
        })}
      </div>
      <a href='#' className='view'>
        View all <HiArrowNarrowRight/>
      </a>
    </Section>
    )
}

const Section = styled.section`
  ${cardStyle};

  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  .title{
    h2{
      color: #ffc107;
      font-family: "arial";
      letter-spacing: 0.3rem;
    }
  }

  .transactions{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;


    .transaction{
      display: flex;
      justify-content: space-between;
      align-items:center;

      &__title{
        display: flex;
        gap: 1rem;

        &__image{
          img{
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
      }
      &__amount{
        background-color: #d7e41e1d;
        padding: 0.2rem; 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover{
          background-color: #ffc107;
          span{
            color: #000;
          }
        }
      }
    }
  }
  .view{
    width: 100%;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #ffc107;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg{
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover{
      svg{
        transform: translateX(0.5rem);
      }
    }
  }
`;