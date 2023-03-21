import * as React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";
import index from "../../../server/controller/index";
import Axios from "axios";

// Generate Sales Data
function createData(day: string, amount?: any) {
  return { day, amount };
}
const [calories, setCalories] = React.useState([]);
useEffect(() => {
  const fetchCalories = async () => {
    Axios.get("/api/dashboard").then((response) => {
      setCalories(response.data);
      console.log(response.data);
      return response;
    });
  };

  //NEED TO REFACTOR THE FETCHCALORIES SO THAT THEY GET DATA FROM INDIVIDUAL DAYS (createdAT tag in the DB?)

  const data = [
    createData("Sunday", { fetchCalories }),
    createData("Monday", { fetchCalories }),
    createData("Tuesday", { fetchCalories }),
    createData("Wednesday", { fetchCalories }),
    createData("Thursday", { fetchCalories }),
    createData("Friday", { fetchCalories }),
    createData("Saturday", { fetchCalories }),
  ];
  function Chart() {
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
                  textAnchor: "middle",
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
  export default Chart;
}, []);
