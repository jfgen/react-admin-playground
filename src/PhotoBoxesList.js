import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  ReferenceInput,
  TextField,
} from "react-admin";

const listFilters = [
  <ReferenceInput source="parkId" label="Park" reference="parks" />,
];

export const PhotoBoxesList = () => {
  return (
    <List filters={listFilters}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="parkId" reference="parks" link="show" />
        <NumberField source="photosTaken" />
      </Datagrid>
    </List>
  );
};
