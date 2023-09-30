import { styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.grey[100]};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);
type Props = {};

function Logo({}: Props) {
  return <LogoWrapper to="/overview">Akchauhan2.com</LogoWrapper>;
}

export default Logo;
