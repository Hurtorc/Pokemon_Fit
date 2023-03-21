import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import index from '../../../server/controller/index';
import axios from 'axios';

// Generate Sales Data
function createData(day: string, amount?: number) {
  return { day, amount };
}
// const [calories, setCalories] = React.useState([]);

// axios.get ('/api/dashboard').then((response) => {
//   setCalories(response.data);
//   return response;
// });


const data = [
  createData('Sunday', 0),
  createData('Monday', 300),
  createData('Tuesday', 600),
  createData('Wednesday', 800),
  createData('Thursday', 1500),
  createData('Friday', 2000),
  createData('Saturday', 2400),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Your Weekly Progress</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="day"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Calories
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
