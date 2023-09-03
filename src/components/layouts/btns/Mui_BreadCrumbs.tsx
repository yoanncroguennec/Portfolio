"use client"

import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'
// ICONS
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function MuiBreadCrumbs() {
  return (
    <Box>
      <Breadcrumbs
        aria-label='breadcrumbs'
        maxItems={3}
        separator={<NavigateNextIcon fontSize='small' />}
      >
        <Link href='/' underline='hover'>
          <Typography variant='h5'>Accueil</Typography>
        </Link>
        {/* <Link href='#' underline='hover'>
          Catalogue
        </Link>
        <Link href='#' underline='hover'>
          Accessoires
        </Link> */}
        <Typography color='text.primary' variant='h5'>
          CV PDF
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
