import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: +true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Revenue",
    },
  },
};

const labels = ["M", "T", "W", "T", "F", "S", "S"];

const nums = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120];
export const data = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: labels.map((label, index) => nums[index]),
      backgroundColor: "#00C4FA",
    },
  ],
};

export default function PriceChart() {
  return <Bar options={options} data={data} />;
}
