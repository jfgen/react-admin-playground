import * as React from "react";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import {
  Datagrid,
  Labeled,
  NumberField,
  Title,
  TextField,
  UrlField,
  EmailField,
} from "react-admin";
import styled from "@emotion/styled";
import { HeroStatCard } from "./HeroStatCard";
import { Bar } from "react-chartjs-2";

const labels = [
  "1",
  "2",
  "3",
  "4",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "New bracelets",
      data: [65, 59, 80, 81, 56, 55, 40, 41, 33, 65, 52, 42, 32, 23, 11],
      // backgroundColor: [
      //   "rgba(255, 99, 132, 0.2)",
      //   "rgba(255, 159, 64, 0.2)",
      //   "rgba(255, 205, 86, 0.2)",
      //   "rgba(75, 192, 192, 0.2)",
      //   "rgba(54, 162, 235, 0.2)",
      //   "rgba(153, 102, 255, 0.2)",
      //   "rgba(201, 203, 207, 0.2)",
      //   "rgba(215, 100, 122, 0.2)",
      //   "rgba(255, 169, 64, 0.2)",
      //   "rgba(255, 215, 86, 0.2)",
      //   "rgba(75, 202, 192, 0.2)",
      //   "rgba(54, 172, 235, 0.2)",
      //   "rgba(153, 112, 255, 0.2)",
      //   "rgba(201, 203, 207, 0.2)",
      //   "rgba(201, 213, 207, 0.2)",
      // ],
      // borderColor: [
      //   "rgb(255, 99, 102)",
      //   "rgb(255, 159, 64)",
      //   "rgb(255, 205, 86)",
      //   "rgb(75, 192, 192)",
      //   "rgb(54, 162, 235)",
      //   "rgb(153, 102, 255)",
      //   "rgb(201, 203, 207)",
      //   "rgb(255, 99, 132)",
      //   "rgb(255, 169, 64)",
      //   "rgb(255, 215, 86)",
      //   "rgb(75, 202, 192)",
      //   "rgb(54, 172, 235)",
      //   "rgb(153, 112, 255)",
      //   "rgb(201, 203, 207)",
      //   "rgb(201, 213, 207)",
      // ],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  const ref = React.useRef();

  return (
    <StyledDashboard>
      <Title title="Dashboard" />
      <Typography variant="h1" sx={{ fontSize: "2rem" }} gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={4} sx={{ paddingTop: "20px" }}>
        <Grid item xs={12} sm={6} md={3}>
          <HeroStatCard title="Total Photos" value={350} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <HeroStatCard title="Total Bracelets" value={160} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <HeroStatCard title="Total Photoboxes" value={5} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <HeroStatCard title="Total Users" value={252} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h4">Bracelets</Typography>
              <Typography variant="caption" gutterBottom>
                last 15 days
              </Typography>
              <Bar ref={ref} data={data} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h4">Photos</Typography>
              <Typography variant="caption" gutterBottom>
                last 15 days
              </Typography>
              <Bar ref={ref} data={data} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h4">Total Photos</Typography>
              <Typography variant="caption" gutterBottom>
                per park
              </Typography>
              <Bar ref={ref} data={data} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                  <Labeled>
                    <TextField source="parks" />
                  </Labeled>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Labeled>
                    <TextField source="photoboxes" />
                  </Labeled>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Labeled>
                    <TextField source="billing" />
                  </Labeled>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Labeled>
                    <TextField source="address" />
                  </Labeled>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Labeled>
                    <TextField source="phone" />
                  </Labeled>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Labeled>
                    <UrlField source="website" />
                  </Labeled>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </StyledDashboard>
  );
};

export default Dashboard;

const StyledDashboard = styled.div`
  margin-top: 20px;
`;
