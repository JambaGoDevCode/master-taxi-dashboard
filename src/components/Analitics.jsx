import React from 'react'
import styled from 'styled-components'
import { cardStyle } from './ReusableStyle';

/* Icons */
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";



export default function Analitics() {
  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h5>Spent this moth</h5>
          <h2>$768.5</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill/>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <IoStatsChart/>
        </div>
        <div className="content">
          <h5>Earnigs</h5>
          <h2>$540</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="content">
          <h5>New clients</h5>
          <h2>$346</h2>
        </div>
          <div className="logo">
            <BiGroup/>
          </div>
      </div>
      <div className="analytic">
        <div className="logo">
            <FiActivity/>
        </div>
        <div className="content">
          <h5>Activity</h5>
          <h2>$246</h2>
        </div>
         
      </div>
    </Section>
  )
}


const Section = styled.section` 
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  .analytic{
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;

    &:hover{
      background-color: #ffc107;
      color: #000;

      svg{
        color: #fff;
      }
    }
    .logo{
      background-color: #000;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;

      svg{
        font-size: 1.5rem;
      }
    }
  }
`;