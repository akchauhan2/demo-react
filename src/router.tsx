import { FC } from 'react';
import { RouteObject, useLocation, useParams } from 'react-router';
import BaseLayout from './layout/BaseLayout';
import SidebarLayout from './layout/SidebarLayout';
import { Link } from 'react-router-dom';
import { Box, Button, Stack, Typography, styled } from '@mui/material';

const LinkWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.primary.main};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);
const Overview: FC = () => {
  return <h1>Overview</h1>;
};

const Status: FC<{ heading?: string; buttons?: Buttons }> = ({
  heading = 'Not Found',
  buttons = [
    {
      title: 'Go Back',
      to: '/'
    }
  ]
}) => {
  const params = useParams();
  const location = useLocation();

  console.log({
    overview: {},
    location,
    params
  });

  return (
    <Box
      sx={{
        height: '100%',
        gap: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography variant="h3">{heading}</Typography>
      <Stack flexDirection={'row'} rowGap={1} columnGap={1}>
        {buttons.map(({ title, to }: Button) => (
          <LinkWrapper to={to} key={title}>
            <Button variant="outlined">{title}</Button>
          </LinkWrapper>
        ))}
      </Stack>
    </Box>
  );
};

const Generic: FC = () => {
  const location = useLocation();

  return <Status heading={location.pathname} />;
};

type Button = {
  to: string;
  title: string;
};
type Buttons = Button[];

const Iframe: FC<{ src: string }> = ({ src }) => (
  <iframe width={'100%'} height={'100%'} src={src}></iframe>
);

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <BaseLayout />
  },
  {
    path: '/dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: 'crypto',
        element: <Iframe src="//dev.akchauhan2.com/crypto" />
      },
      {
        path: 'story',
        element: <Iframe src="//dev.akchauhan2.com/story" />
      },

      {
        path: '*',
        element: <Generic />
      }
    ]
  },
  {
    path: '/components',
    element: <SidebarLayout />,
    children: [
      {
        path: 'buttons',
        element: (
          <Iframe src="//dev.akchauhan2.com/story/?path=/story/components-button--red" />
        )
      },
      {
        path: 'stack',
        element: (
          <Iframe src="//dev.akchauhan2.com/story/?path=/story/components-stack--horizontal" />
        )
      },
      {
        path: '*',
        element: <Generic />
      }
    ]
  },
  {
    path: '/management',
    element: <SidebarLayout />,
    children: [
      {
        path: 'windows',
        element: <Iframe src="//dev.akchauhan2.com/w11" />
      },
      {
        path: '*',
        element: <Generic />
      }
    ]
  },
  {
    path: '/status',
    element: <BaseLayout />,
    children: [
      {
        path: '404',
        element: <Status heading="404: Not Found" />
      },
      {
        path: '500',
        element: (
          <Status
            heading="500: Not Found"
            buttons={[
              {
                title: 'Go Back',
                to: '/'
              },
              {
                title: 'Home',
                to: '/'
              }
            ]}
          />
        )
      },
      {
        path: '*',
        element: <Status heading="Under Maintenance" />
      }
    ]
  },
  {
    path: '/',
    element: <SidebarLayout />,
    children: [
      {
        path: 'overview',
        element: <Overview />
      },
      {
        path: '*',
        element: <Generic />
      }
    ]
  }
];

export default routes;
