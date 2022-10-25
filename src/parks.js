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
} from "react-admin";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

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
