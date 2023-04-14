import React,{useEffect, useState} from 'react';
import styled from 'styled-components';


/* Import Icons */
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from "react-icons/vsc"; 


export default function Sidebar() {

    const [correntLink, setCorrentLink] = useState(1);
    const [navbarState, setNavbarState] = useState(false);
    const html = document.querySelector("html");
    html.addEventListener("click",()=> setNavbarState(false));

  return (
    <>
        <Section>
            <div className='top'>
                <div className="brand">
                    <FaTaxi/>
                    <span>My Taxy</span>
                </div>
                <div className="toggle">
                  
                </div>
                <div className="links">
                    <ul>
                        <li onClick = {() => setCorrentLink(1)} className= {correntLink === 1 ? "active" : ""}>
                            <a href="#">
                                <MdSpaceDashboard/>
                                <span> Dashboard </span>
                            </a>
                        </li>
                        <li onClick = {() => setCorrentLink(2)} className= {correntLink === 2 ? "active" : ""}>
                            <a href="#">
                                <RiDashboard2Fill/>
                                <span> Riders </span>
                            </a>
                        </li>
                        <li onClick = {() => setCorrentLink(3)} className= {correntLink === 3 ? "active" : ""}>
                            <a href="#">
                                <FaAddressCard/>
                                <span> Payment Detaill </span>
                            </a>
                        </li>
                        <li onClick = {() => setCorrentLink(4)} className= {correntLink === 4 ? "active" : ""}>
                            <a href="#">
                                <GiTwirlCenter/>
                                <span> Learning Center </span>
                            </a>
                        </li>
                        <li onClick = {() => setCorrentLink(5)} className= {correntLink === 5 ? "active" : ""}>
                            <a href="#">
                                <BsFillChatTextFill/>
                                <span> FAQs </span>
                            </a>
                        </li>
                        <li onClick = {() => setCorrentLink(6)} className= {correntLink === 6 ? "active" : ""}>
                            <a href="#">
                                <IoSettings/>
                                <span> Settings </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="logout">
                <a href="#">
                    <FiLogOut/>
                    <span className="logout">Logout</span>
                </a>
            </div>
        </Section>


        <ResposiveNav
            state={navbarState}
            className={navbarState ? "show" : ""}>

                <div className="responsiveLinks">
                     <ul>
                        <li onClick = {() => setCorrentLink(1)} className= {correntLink === 1 ? "active" : ""}>
                            <a href="#">
                                <MdSpaceDashboard/>
                                <span> Dashboard </span>
                            </a>
                        </li>
                        <li onClick = {() => setCorrentLink(2)} className= {correntLink === 2 ? "active" : ""}>
                            <a href="#">
                                <RiDashboard2Fill/>
                                <span> Riders </span>
                            </a>
                        </li>
                        <li onClick = {() => setCorrentLink(3)} className= {correntLink === 3 ? "active" : ""}>
                            <a href="#">
                                <FaAddressCard/>
                                <span> Payment Detaill </span>
                            </a>
                        </li>
                        <li onClick = {() => setCorrentLink(4)} className= {correntLink === 4 ? "active" : ""}>
                            <a href="#">
                                <GiTwirlCenter/>
                                <span> Learning Center </span>
                            </a>
                        </li>
                        <li onClick = {() => setCorrentLink(5)} className= {correntLink === 5 ? "active" : ""}>
                            <a href="#">
                                <BsFillChatTextFill/>
                                <span> FAQs </span>
                            </a>
                        </li>
                        <li onClick = {() => setCorrentLink(6)} className= {correntLink === 6 ? "active" : ""}>
                            <a href="#">
                                <IoSettings/>
                                <span> Settings </span>
                            </a>
                        </li>
                    </ul>
                </div>
        </ResposiveNav>
    </>
  );
}



/* Style component */
const Section = styled.section`
    position: fixed;
    left: 0;
    background-color:#212121;
    height: 100vh;
    width:15vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 2rem;

    .top{
        display: flex;
        flex-direction:column;
        gap: 2rem;
        width:100%;

        .toggle{
            display: none;
        }
        .brand{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;

            svg{
                color: #ffc107;
                font-size: 2rem;
            }
            span{
                color: #ffc107;
                font-size: 1rem;
            }
        }

        .links{
            display: flex;
            justify-content: center;
            ul{
                list-style-type:none;
                display:flex;
                flex-direction:column;
                gap: 1rem;
                li{
                    padding: 0.6rem 1rem;
                    border-radius: 0.6rem;

                    &:hover{
                        background-color: #ffc107;
                        a{
                            color: #000;
                        }
                    }
                    a{
                        text-decoration: none;
                        display: flex;
                        gap: 1rem;
                        color: #fff;
                    }
                }
                .active{
                    background-color: #ffc107;
                    a{
                        color: #000;
                    }
                }
            }
        }
    }
    
    .logout{
        padding:0.3rem 1rem;
        border-radius: 0.6rem;
        &:hover{
            background-color: #da0037;
        }
        a{
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: white;
        }
    }

    @media screen and (min-width:280px) and (max-width:1080px){
        positon: initial;
        width: 100%;
        height: max-content;
        padding: 1rem;

        .top{
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 1rem;

            .toggle{
                display: block;
                color: white;
                z-index: 10;

                svg{
                    font-size: 1.4rem
                }
            }

            .brand{
                gap: 1rem;
                justify-content: flex-start;
            }
        }
        
        .top > .links, .logout{
            display: none;
        }
    }
`;




const ResposiveNav = styled.nav`
    position: fixed;
    right: -10vw;
    top: 0;
    z-index: 20;
    background-color: #000;
    height: 100vh;
    width: ${(state) => (state ? "60%" : "0%")};
    transition: 0.4s ease-in-out;
    opacity: 0;
    visibility: hidden;
    padding: 1rem;

    .responsiveLinks{
        ul{
            list-style-type:none;
            display:flex;
            flex-direction:column;
            gap: 1rem;
            li{
                padding: 0.6rem 1rem;
                border-radius: 0.6rem;

                &:hover{
                    background-color: #ffc107;
                    a{
                        color: #000;
                    }
                }
                a{
                    text-decoration: none;
                    display: flex;
                    gap: 1rem;
                    color: #fff;
                }
            }
    }
`;