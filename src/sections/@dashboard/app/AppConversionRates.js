import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Box, Card, CardHeader } from "@mui/material";
// utils
import { fNumber } from "../../../utils/formatNumber";
//
import { BaseOptionChart } from "../../../components/charts";
import { useTranslate } from "react-admin";
import { i18nProvider } from "./../../../i18n/i18nProvider";

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    data: [
      200, 250, 320, 400, 430, 448, 470, 540, 580, 690, 900, 1100, 1200, 1380,
    ],
  },
];

export default function AppConversionRates() {
  const translate = useTranslate();
  const locale = i18nProvider.getLocale();

  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `#${seriesName}`,
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: "28%", borderRadius: 2 },
    },
    xaxis: {
      categories:
        locale === "ru"
          ? [
              "Андижан",
              "Джизак",
              "Кашкадарья",
              "Навои",
              "Наманган",
              "Сурхандарья",
              "Сырдарья",
              "Фергена",
              "Хорезм",
              "Каракалпакстан",
              "Бухоро",
              "Ташкентская область",
              "Самарканд",
              "Ташкент",
            ]
          : [
              "Andijon",
              "Jizzax",
              "Qashqadaryo",
              "Navoiy",
              "Namangan",
              "Surxondaryo",
              "Sirdaryo",
              "Farg'ona",
              "Xorazm",
              "Qoraqalpog'iston Respublikasi",
              "Buxoro",
              "Toshkent viloyati",
              "Samarqand",
              "Toshkent",
            ],
    },
  });

  return (
    <Card>
      <CardHeader
        title={translate("static.indicators_by_region")}
        subheader={translate("static.service_indicator_percent")}
      />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart
          type="bar"
          series={CHART_DATA}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
