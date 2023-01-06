import * as React from "react";
import {
  Edit,
  SimpleForm,
  ReferenceArrayInput,
  //   SelectInput,
  BooleanInput,
  CheckboxGroupInput,
  useTranslate,
} from "react-admin";
import { PasswordInput, TextInput } from "../../components/Inputs";
import Grid from "@mui/material/Grid";

export const UserEdit = (props) => {
  const translate = useTranslate();
  return (
    <>
      <h2>{translate("resources.users.edit")}</h2>
      <Edit {...props} redirect="list">
        <SimpleForm>
          <TextInput disabled source="id" />
          <Grid container spacing={2}>
            {/* <Grid item> */}
            {/* </Grid> */}
            <Grid item md={6}>
              <TextInput source="username" />
            </Grid>
            <Grid item md={6}>
              <PasswordInput source="password" />
            </Grid>
            <Grid item md={6}>
              <TextInput source="name" />
            </Grid>
            <Grid item md={6}>
              <TextInput source="email" />
            </Grid>

            <Grid item md={6}>
              <TextInput source="phone" />
              <BooleanInput source="phoneConfirmed" />
            </Grid>
          </Grid>
        </SimpleForm>
      </Edit>
    </>
  );
};
