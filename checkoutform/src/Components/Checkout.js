import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import { pink } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab'
import HomeIcon from '@mui/icons-material/Home';



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        ULTA Beauty
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[500]),
  backgroundColor: pink[500],
  '&:hover': {
    backgroundColor: pink[700],
  },
}));

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar style={{ background: '#E80D5A' }}>
          <Grid item xs={6} sx={{ mt: 1, ml: 1 }}>
          
          <img src="https://media.allure.com/photos/5a2059acfb107e46b5af8401/3:2/w_1458,h_972,c_limit/90s%20Ulta%20Lede.jpg" alt="" height="49px" width="73px"></img>
          
          </Grid>
          <Box>
          <Typography variant="h6" noWrap style={{ color: 'white' }} sx={{ mt: 3, ml: 1 }}>
            ULTA Beauty | Checkout
          </Typography>
          <span className="font-link" style={{variant:"h6", color: "#E80D5A"}} sx={{ mt: 3, ml: 1 }}>
             ULTA Beauty
          </span>
          </Box>
         
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <br></br>
          <Grid align="center">
            <Avatar style={{background: '#E80D5A'}}>
              <LockIcon></LockIcon>
            </Avatar>
            <br></br>
          <Typography component="h3" variant="h5" align="center">
            Secure Checkout
          </Typography>
          </Grid>
          
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
                <Box>
                  <Grid sx={{ mt: 3, ml: 1 }}>
                    <Fab variant="extended" style={{background: "#E80D5A", color: "white"}} href="https://www.ulta.com/">
                      <HomeIcon sx={{ mr: 1 }} />
                      Head back to main page
                    </Fab>
                   </Grid>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <ColorButton onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </ColorButton>
                  )}

                  <ColorButton
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </ColorButton>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}