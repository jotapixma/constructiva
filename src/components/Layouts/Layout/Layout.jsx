import React, { useEffect, useState } from 'react';
import Footer from '../../../components/Footer/Footer'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from '../../../components/NavBar/NavBar';
import styles from './Layout.module.scss';

export default function Layout({children}) {
  const matchesLg = useMediaQuery('(min-width:1200px)');

  return (
    <React.Fragment>
      <NavBar/>
      <Box>
        {children}
      </Box>
        <Footer/>
    </React.Fragment>
  )
}