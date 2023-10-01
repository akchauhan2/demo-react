import { FC } from 'react';
import { RouteObject, useLocation } from 'react-router';
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

const Status: FC<{ heading?: string; buttons?: Buttons }> = ({
  heading = 'Not Found',
  buttons = [
    {
      title: 'Go Back',
      to: MAIN_PAGE
    }
  ]
}) => {
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

  return <Status heading={location.pathname.replace(MAIN_PAGE, '')} />;
};

type Button = {
  to: string;
  title: string;
};
type Buttons = Button[];

const Iframe: FC<{ src: string }> = ({ src }) => {
  const location = useLocation();

  return (
    <Box
      sx={{
        height: '100%',
        gap: '.5em',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography variant="h3" align="center">
        {location.pathname.replace(MAIN_PAGE, '')}
      </Typography>
      <iframe width={'100%'} style={{ flex: 1 }} src={src}></iframe>
    </Box>
  );
};
export const MAIN_PAGE = '/demo';

const routes: RouteObject[] = [
  {
    path: MAIN_PAGE,
    element: <BaseLayout />,
    children: [
      {
        path: 'login',
        element: (
          <BaseLayout>
            <Typography variant="h1" align="center">
              Not Found
            </Typography>
            <Generic />
          </BaseLayout>
        )
      },
      {
        path: 'dashboards',
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
        path: 'components',
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
        path: 'management',
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
        path: 'status',
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
                    to: MAIN_PAGE
                  },
                  {
                    title: 'Home',
                    to: MAIN_PAGE
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
        path: '',
        element: <SidebarLayout />,
        children: [
          {
            path: 'overview',
            element: <Iframe src="//akchauhan2.com" />
          },
          {
            path: '*',
            element: <Generic />
          }
        ]
      }
    ]
  },
  {
    path: '',
    element: <BaseLayout>Welcome</BaseLayout>
  }
];

export default routes;
