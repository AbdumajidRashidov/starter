import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box } from "@mui/material";
//
import { BaseOptionChart } from "../../../components/charts";
import { useTranslate } from "react-admin";
import { i18nProvider } from "./../../../i18n/i18nProvider";

// ----------------------------------------------------------------------

export default function AppWebsiteVisits() {
  const translate = useTranslate();
  const locale = i18nProvider.getLocale();
  const CHART_DATA = [
    {
      name: locale === "ru" ? "Установки ГБО" : "HBO O'rnatish",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: locale === "ru" ? "Т.О. 1" : "Т.X. 1",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: locale === "ru" ? "Т.О. 2" : "Т.X. 2",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ];
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    fill: { type: ["solid", "gradient", "solid"] },
    labels: [
      "05/01/2022",
      "05/04/2022",
      "05/07/2022",
      "05/10/2022",
      "05/13/2022",
      "05/16/2022",
      "05/19/2022",
      "05/22/2022",
      "05/25/2022",
      "05/28/2022",
      "05/31/2022",
    ],
    xaxis: { type: "datetime" },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)}`;
          }
          return y;
        },
      },
    },
  });
  return (
    <Card>
      <CardHeader
        title={translate("static.service_indicators")}
        subheader={translate("static.service_indicator_percent")}
      />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart
          type="line"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
