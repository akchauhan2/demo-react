import { styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { MAIN_PAGE } from '../../router';
const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.grey[100]};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);

function Logo() {
  return <LogoWrapper to={MAIN_PAGE + '/overview'}>Akchauhan2.com</LogoWrapper>;
}

export default Logo;
