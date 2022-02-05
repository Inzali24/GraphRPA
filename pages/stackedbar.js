import React from 'react';
import {Line} from 'react-chartjs-2';

const DATA_COUNT = 7;

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
      label: 'Correct Rate',
      data: [0, 10, 5, 2, 20, 30, 45],
      backgroundColor: 'rgba(255,99,132,0.2)',
		  borderColor: 'rgba(255,99,132,1)',
      stack: 'combined'
    }
  ]
};

export default () => (  
    <div>
      <h2>Stackedbar Example wahaha</h2>
      <Line
        data={data}
        width={600}
        height={400}
      />
    </div>
  );
  