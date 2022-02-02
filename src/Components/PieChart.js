import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["IOS", "ANDROID"],
  datasets: [
    {
      label: "Installs",
      data: [40, 60],
      backgroundColor: ["#1E74FF", "#FF6384"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return <Pie data={data} />;
}
