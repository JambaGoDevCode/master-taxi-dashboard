import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Analitics from './Analitics';
import FAQ from './FAQ';
import Transfers from './Transfers';
import Earnings from './Earnings';
import Profile from './Profile';


export default function Dashboard() {
  return (
    <Section>
        <Navbar/>
            <div className="grid">
                <div className="row__one">
                    <Analitics/>
                    <FAQ/>                    
                </div>
                <div className="row__two">
                  <Earnings/>
                  <Transfers/>
                  <Profile/> 
                </div>
            </div>
    </Section>
  )
}

/** Style component */
const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;

  .grid{
    display:flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;

    .row__one{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }

    .row__two{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }
`;