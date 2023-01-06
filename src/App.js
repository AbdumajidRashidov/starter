import "./App.css";
import config from "./config.json";
import { i18nProvider } from "./i18n/i18nProvider";
import React, { useEffect, useState } from "react";
import { Admin, Resource } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
import apiProvider from "./services/apiService";
import useTheme from "./theme";
import MainLayout from "./layouts/main";
import DashboardApp from "./pages/DashboardApp";
// import Login from "./pages/Login";
import authProvider from "./sections/authentication/AuthProvider";

import { UserList } from "./pages/user/user.list";
import { UserEdit } from "./pages/user/user.edit";
import { UserCreate } from "./pages/user/user.create";

const App = () => {
  const theme = useTheme();

  const [locales, setLocales] = useState([]);

  authProvider.checkAuth();

  useEffect(() => {
    fetchLocales();
  }, []);

  async function fetchLocales() {
    const response = await fetch(config.API_URL + "/locales");
    const json = await response.json();

    setLocales(json);
    apiProvider.locales = json;
    console.log(json);
  }
  return (
    <>
      <Admin
        theme={theme}
        layout={MainLayout}
        error={404}
        dataProvider={apiProvider}
        // authProvider={authProvider}
        i18nProvider={i18nProvider}
        dashboard={DashboardApp}
        // loginPage={Login}
        title="СТО Админ Панель">
        <Resource
          name="users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
        />
        <Resource name="locales" />
        <Resource name="roles" />
        <Resource name="autoBodyType" />
        <Resource name="organizationInfo" />
      </Admin>
    </>
  );
};

export default App;
