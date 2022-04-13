import React from "react";
import { connect } from "react-redux";
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

const BarChart = (props) => {
  const { dashboard } = props;
  console.log(dashboard);
  const options = {
    responsive: +true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Patients",
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
  const nums = new Array(12).fill(0);
  dashboard?.monthly_appointment_revenue.map((app) => {
    nums[app._id - 1] = app.revenue;
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: labels.map((label, index) => nums[index]),
        backgroundColor: "#35A2EB",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard,
  };
};
export default connect(mapStateToProps)(BarChart);
