import React, { forwardRef } from "react";
import { Layout, AppBar, UserMenu, Sidebar, useLocaleState } from "react-admin";
import { MenuItem, ListItemIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import Language from "@mui/icons-material/Language";
import AppMenu from "./AppMenu";

const SMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const SListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: theme.spacing(5),
}));

const SwitchLanguage = forwardRef((props, ref) => {
  const [locale, setLocale] = useLocaleState();
  return (
    <SMenuItem
      ref={ref}
      onClick={() => {
        setLocale(locale === "ru" ? "uz" : "ru");
        props.onClick();
      }}
    >
      <SListItemIcon>
        <Language />
      </SListItemIcon>
      Switch Language
    </SMenuItem>
  );
});

const MyUserMenu = (props) => (
  <UserMenu {...props}>
    <SwitchLanguage />
  </UserMenu>
);

const MySidebar = (props) => {
  return (
    <Sidebar {...props}>
      <AppMenu />
    </Sidebar>
  );
};

const MyAppBar = (props) => <AppBar {...props} userMenu={<MyUserMenu />} />;

const AppLayout = (props) => (
  <Layout {...props} appBar={MyAppBar} sidebar={MySidebar} />
);

// const MyLayout = ({
//   children,
//   dashboard,
//   title,
// }) => {
//   const classes = useStyles();
//   const [open] = useSidebarState();

//   return (
//       <div className={classes.root}>
//           <div className={classes.appFrame}>
//               <AppBar title={title} open={open} />
//               <main className={classes.contentWithSidebar}>
//                   <Sidebar>
//                       <Menu hasDashboard={!!dashboard} />
//                   </Sidebar>
//                   <div className={classes.content}>
//                       {children}
//                   </div>
//               </main>
//           </div>
//       </div>
//   );
// };

// MyLayout.propTypes = {
//   children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
//   dashboard: PropTypes.oneOfType([
//       PropTypes.func,
//       PropTypes.string,
//   ]),
//   title: PropTypes.string.isRequired,
// };

export default AppLayout;
