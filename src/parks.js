import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  TextInput,
  SimpleForm,
  Edit,
  ReferenceInput,
  Create,
  useRecordContext,
  NumberField,
  EmailField,
  Show,
  Tab,
  TabbedShowLayout,
  UrlField,
} from "react-admin";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

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

export const ParkList = () => (
  <List filters={postFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <NumberField source="photoboxes" />
      <NumberField source="photosTaken" />
      {/* <ReferenceField source="userId" reference="users" /> */}
      <EditButton />
    </Datagrid>
  </List>
);

const ParkTitle = () => {
  const record = useRecordContext();
  return <span>Editing post {record ? `"${record.title}"` : ""}</span>;
};

export const ParkEdit = () => (
  <Edit title={<ParkTitle />}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="address" />
    </SimpleForm>
  </Edit>
);

export const ParkCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="address" />
    </SimpleForm>
  </Create>
);

export const ParkShow = () => {
  const ref = React.useRef();
  return (
    <Show>
      {/* <SimpleShowLayout>
      <TextField label="Name" source="name" />
      <TextField label="Address" source="address" />
    </SimpleShowLayout> */}
      <TabbedShowLayout>
        <Tab label="summary">
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Typography variant="h1" gutterBottom>
                350
              </Typography>
              <Typography variant="h5" gutterBottom>
                Total Photos
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h1" gutterBottom>
                160
              </Typography>
              <Typography variant="h5" gutterBottom>
                Total Bracelets
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h1" gutterBottom>
                5
              </Typography>
              <Typography variant="h5" gutterBottom>
                Total Photoboxes
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h3" gutterBottom>
                New bracelets - last 15 days
              </Typography>
              <Bar ref={ref} data={data} />
            </Grid>
            {/* <Grid item xs={2} /> */}
            <Grid item xs={4}>
              <Typography variant="h3" gutterBottom>
                New photos - last 15 days
              </Typography>
              <Bar ref={ref} data={data} />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h3" gutterBottom>
                Photos per photobox
              </Typography>
              <Bar ref={ref} data={data} />
            </Grid>
          </Grid>
        </Tab>
        <Tab label="Info" path="info">
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="address" />
          <TextField source="phone" />
          <UrlField source="website" />
        </Tab>
        <Tab label="Photoboxes" path="photoboxes">
          {/* <ReferenceManyField reference="comments" target="post_id" label={false}>
          <Datagrid>
            <TextField source="body" />
            <DateField source="created_at" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField> */}
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};
