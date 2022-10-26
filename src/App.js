import * as React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
// import { UserList } from "./users";
import { ParkCreate, ParkEdit, ParkList } from "./parks";
import { PhotoBoxesList } from "./PhotoBoxesList";
import { ParkShow } from "./ParkShow";
import { theme } from "./theme";
import authProvider from "./authProvider";
import AttractionsIcon from "@mui/icons-material/Attractions";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PersonIcon from "@mui/icons-material/Person";
import { UsersList } from "./UsersList";
import Dashboard from "./Dashboard";

const dataProvider = jsonServerProvider(
  "https://my-json-server.typicode.com/jfgen/mockapi",
);

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
    theme={theme}
  >
    <Resource
      name="parks"
      list={ParkList}
      edit={ParkEdit}
      create={ParkCreate}
      show={ParkShow}
      recordRepresentation="name"
      icon={AttractionsIcon}
    />
    <Resource name="photoboxes" list={PhotoBoxesList} icon={CameraAltIcon} />
    <Resource name="users" list={UsersList} icon={PersonIcon} />
  </Admin>
);

export default App;
