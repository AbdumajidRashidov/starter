import PropTypes from "prop-types";
import { useSidebarState } from "react-admin";
// material
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
//
import MainNavbar from "./MainNavbar";
import MainSidebar from "./MainSidebar";
// theme
import GlobalStyles from "../../theme/globalStyles";

import { BaseOptionChartStyle } from "../../components/charts/BaseOptionChart";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

const DashboardLayout = ({ children, dashboard, title }) => {
  const [open, setOpen] = useSidebarState();
  return (
    <RootStyle>
      <GlobalStyles />
      <BaseOptionChartStyle />
      <MainNavbar onOpenSidebar={() => setOpen(true)} />
      <MainSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Container>{children}</Container>
      </MainStyle>
    </RootStyle>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  dashboard: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  title: PropTypes.string.isRequired,
};

export default DashboardLayout;
