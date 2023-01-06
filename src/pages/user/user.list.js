import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  useTranslate,
  SelectInput,
  DeleteButton,
} from "react-admin";

import { ReferenceInput, TextInput } from "../../components/Inputs";

const userFilters = [
  <TextInput
    margin="normal"
    source="q"
    label="Search"
    alwaysOn
    variant="outlined"
  />,
  <ReferenceInput
    margin="normal"
    source="userId"
    label="Users"
    reference="users">
    <SelectInput margin="normal" optionText="username" variant="outlined" />
  </ReferenceInput>,
];

export const UserList = (props) => {
  const translate = useTranslate();
  return (
    <>
      <h2>{translate("resources.users.list")}</h2>
      <List {...props} title="List of Users" filters={userFilters}>
        <Datagrid rowClick="edit" optimized size="medium">
          <TextField source="id" />
          <TextField source="username" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <DeleteButton />
        </Datagrid>
      </List>
    </>
  );
};
