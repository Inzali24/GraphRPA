import React from 'react';
import {Line} from 'react-chartjs-2';

export default ({data}) => (  
    <div>
      <h2>分析データ</h2>
      <Line
        data={data}
        width={800}
        height={500}
      />
    </div>
  );