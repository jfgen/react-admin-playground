import {
  Datagrid,
  EmailField,
  List,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
} from "react-admin";

const listFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="parkId" label="Park" reference="parks" />,
];

export const UsersList = () => {
  return (
    <List filters={listFilters}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <ReferenceField source="parkId" reference="parks" link="show" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};
