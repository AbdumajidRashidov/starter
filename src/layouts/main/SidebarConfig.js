// component
import { useTranslate } from "react-admin";
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

export const SidebarConfig = () => {
  const translate = useTranslate();
  return [
    {
      title: translate("static.dashboard"),
      path: "/",
      isMain: true,
      icon: getIcon("eva:pie-chart-2-fill"),
    },
    {
      title: translate("resources.users.name"),
      path: "/users",
      icon: getIcon("eva:people-fill"),
    },
  ];
};
