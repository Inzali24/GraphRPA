import Head from 'next/head'
import Stackedbar from './stackedbar';
import * as React from 'react';
import {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];

const data = {
labels: labels,
datasets: [
  {
    label: 'Number of Submissions',
    data: [0, 10, 5, 2, 20, 30, 45],
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    stack: 'combined',
    type: 'bar'
  },
  {
    label: 'Correct Rate%',
    data: [0, 10, 5, 2, 20, 30, 45],
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    stack: 'combined'
  }
]
};

function Home(){
  const [textInput, setTextInput] = React.useState('');
    const [state, setState] = useState(data)

  const handleClick = () => {
    console.log(textInput);
    const raw = textInput.split("\n").map((x) => x.split(" "));

      const result = {
        labels: raw.map((x) => x[0]),
        datasets: [
          {
            label: "Number of Submissions",
            data: raw.map((x) => +x[1]),
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            stack: "combined",
            type: "bar",
          },
          {
            label: "Correct Rate",
            data: raw.map((x) => +x[2].replace("", "")),
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            stack: "combined",
          },
        ],
      };


    setState(result)
    
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
      <Box component="form" sx={{ flexGrow: 0}}>
        <Grid container spacing={4} justifyContent="space-evenly" alignItems="stretch">
          <Grid item xs="auto">
            <h3>テスト結果分析</h3>
            <TextareaAutosize class="txtInput"　onChange={handleChange}
              id="filled-multiline-static"
              hint="入力データ"
              multiline
              rows={10}
              variant="filled"
              style={{width:400,height:500}}
            />
            <br></br>
            <br></br>
            <Button onClick={handleClick} variant="contained">Do Analysis</Button>            
          </Grid>
          <Grid item xs={6} md={6}>
            <Stackedbar data={state} />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
export default Home;