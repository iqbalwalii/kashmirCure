import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = (props) => {
  const { dashboard } = props;
  let docs = new Array(12).fill(0);
  let patients = new Array(12).fill(0);
  dashboard?.monthly_doctors.map((doc) => (docs[doc._id - 1] = doc.total));
  dashboard?.monthly_patients.map((pat) => (patients[pat._id - 1] = pat.total));
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
  const data = {
    labels,
    datasets: [
      {
        label: "Doctors",
        data: labels?.map((label, index) => docs[index]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Patients",
        data: labels?.map((label, index) => patients[index]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const options = {
    responsive: +true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Kiadah",
      },
    },
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard,
  };
};
export default connect(mapStateToProps)(LineChart);
