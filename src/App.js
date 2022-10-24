import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import { ParkCreate, ParkEdit, ParkList, ParkShow } from "./parks";

const dataProvider = jsonServerProvider(
  "https://my-json-server.typicode.com/jfgen/mockapi",
);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="parks"
      list={ParkList}
      edit={ParkEdit}
      create={ParkCreate}
      show={ParkShow}
    />
    {/* <Resource name="users" list={UserList} recordRepresentation="name" /> */}
  </Admin>
);

export default App;
