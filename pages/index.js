import Head from 'next/head'
import Stackedbar from './stackedbar';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const input = props => {
  const [textInput, setTextInput] = React.useState('');

  const handleClick = () => {
    console.log(textInput);
    props.send(textInput);
  }
  
  const handleChange = (event) => {
    setTextInput(event.target.value);
  }
  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="form" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid>
            <TextField　onChange={handleChange}
              id="filled-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="filled"
            />
            <Button onClick={handleClick} variant="contained">Press Me</Button>
            
          </Grid>
          <Grid item xs={6} md={8}>
            <Stackedbar />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
export default Home;