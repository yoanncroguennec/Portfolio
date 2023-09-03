import { Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react'


export default function Navbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

  //////////////////// STYLES ////////////////////
  const stylesLinkNav = {
    display: "block",
    padding: "1.5rem",
    textDecoration: "none",
  }

  const TypoLinksNav = styled(Typography)(({ theme }) => ({
    color: "#FFF",
    fontWeight: "bold",
    textShadow: "red 1px 4px",
    [theme.breakpoints.down("sm")]: {
      // background: "red",
    },
  }));


  const [showLinks, setShowLinks] = useState(false);

  function handleShowLinks() {
    setShowLinks(!showLinks);
  }

  return (
    // <nav>
    <nav className={`navbar ${showLinks ? "showNav" : "hideNav"}`}>
      <ul className='navbarLinks'>
        <div
          style={{
            textAlign: "center",
            paddingTop: "80px",
            marginTop: "80px",
          }}
        >
          <li className='navbarItem slideInDown-1'>
            <Link
            href=""
              // href='https://portfolio-rgf1zb9hk-yoanncroguennec.vercel.app/'
              onClick={handleShowLinks}
              style={stylesLinkNav}
            >
              <TypoLinksNav variant={matches ? "h5" : "h3"}>
                ACCUEIL
              </TypoLinksNav>
            </Link>
          </li>

          <li className='navbarItem slideInDown-2'>
            <Link
              href='#myProjects'
              onClick={handleShowLinks}
              style={stylesLinkNav}
            >
              <TypoLinksNav variant={matches ? "h5" : "h3"}>
                MES PROJETS
              </TypoLinksNav>
            </Link>
          </li>
          <li className='navbarItem slideInDown-3'>
            <Link
              href='#technologies'
              onClick={handleShowLinks}
              style={stylesLinkNav}
            >
              <TypoLinksNav variant={matches ? "h5" : "h3"}>
                TECHNOLOGIES
              </TypoLinksNav>
            </Link>
          </li>
          <li className='navbarItem slideInDown-4'>
            <Link
              href='#experienceTraining'
              onClick={handleShowLinks}
              style={stylesLinkNav}
            >
              <TypoLinksNav variant={matches ? "h5" : "h3"}>
                EXPÉRIENCES & FORMATIONS
              </TypoLinksNav>
            </Link>
          </li>
          <li className='navbarItem slideInDown-5'>
            <Link
              href='#audiovisualProductions'
              onClick={handleShowLinks}
              style={stylesLinkNav}
            >
              <TypoLinksNav variant={matches ? "h5" : "h3"}>
                RÉALISATIONS AUDIOVISUELLES
              </TypoLinksNav>
            </Link>
          </li>
          <li className='navbarItem slideInDown-6'>
            <Link
              href='#hobbies'
              onClick={handleShowLinks}
              style={stylesLinkNav}
            >
              <TypoLinksNav variant={matches ? "h5" : "h3"}>
                PASSIONS
              </TypoLinksNav>
            </Link>
          </li>
          <li className='navbarItem slideInDown-7'>
            <Link
              href='#contact'
              onClick={handleShowLinks}
              style={stylesLinkNav}
            >
              <TypoLinksNav variant={matches ? "h5" : "h3"}>
                CONTACT
              </TypoLinksNav>
            </Link>
          </li>
        </div>
      </ul>

      <div className='navbarBurgerWrapper' onClick={handleShowLinks}>
        <div className='burgerIcon'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
