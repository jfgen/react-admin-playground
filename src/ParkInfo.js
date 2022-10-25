import { Card, CardContent, Grid } from "@mui/material";
import { EmailField, Labeled, TextField, UrlField } from "react-admin";

export const ParkInfo = () => {
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Labeled>
              <TextField source="id" />
            </Labeled>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Labeled>
              <TextField source="name" />
            </Labeled>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Labeled>
              <EmailField source="email" />
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
  );
};
