import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/Button';
// import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import { pink } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Box from '@mui/material/Box';
// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';

// import FormControl from '@mui/material/FormControl';

// import AccountCircle from '@mui/icons-material/AccountCircle';

  // const btnStyle = {
  //   backgroundColor: "pink",
  //   color: "white",
  
  // }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  }));

  const buttonStyle = {
    margin: "10 px",
  }

export default function PaymentForm() {
  return (

    <React.Fragment>
        
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid>
      {/* <ButtonGroup variant="outlined" style={btnStyle}>
        <Button>Credit Card</Button>
        <Button>Paypal</Button>
        <Button>Afterpay</Button>
    </ButtonGroup> */}
    
    <Box align="center">

      <ColorButton variant="contained" style={buttonStyle} sx={{ mt: 3, ml: 1 }}>Credit Card</ColorButton>
      <ColorButton variant="contained" sx={{ mt: 3, ml: 1 }} href="https://www.paypal.com/us/home">PayPal</ColorButton>
      <ColorButton variant="contained" sx={{ mt: 3, ml: 1 }} href="https://www.afterpay.com/en-US">Afterpay</ColorButton>
    
    </Box>

    <br></br>
    <br></br>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>

      {/* <Grid>
        <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle/>
          <TextField id="input-with-sx" label="Card Name" variant="standard" />
        </Box>
        </Grid>
      </Grid> */}

  

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"

            endAdornment={ 

              <InputAdornment position="end">
          <CreditCardIcon></CreditCardIcon>
        </InputAdornment>

            }
          />
        <Grid></Grid>
        
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} >
          <FormControlLabel
            control={<Switch name="saveCard" value="yes" style={{color: '#E80D5A'}}/>}
            
            label="Billing address same as shipping address"

          />
        </Grid>
        {/* <Grid item xs={12}>
        <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Billing address same as shipping address" />
        </FormGroup>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}