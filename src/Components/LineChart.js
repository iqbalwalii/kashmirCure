import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Container } from "react-bootstrap";
// import faker from "faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: "Kashmir Cure",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const nums = [0, 10, 20, 50, 60, 70, 80, 30, 40, 90, 100, 120];
const nums2 = [0, 10, 10, 20, 90, 120, 40, 30, 120, 90, 100, 120];

export const data = {
  labels,
  datasets: [
    {
      label: "Doctors",
      data: labels.map((label, index) => nums[index]),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Patients",
      data: labels.map((label, index) => nums2[index]),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function LineChart() {
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}
