import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: false,
			text: 'Patients',
		},
	},
};

const labels = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'June',
	'July',
	'Aug',
	'Sept',
	'Oct',
	'Nov',
	'Dec',
];
const nums = [
	10000, 6000, 7000, 8000, 9000, 10000, 12000, 8000, 9000, 10000, 12000, 8000,
];
export const data = {
	labels,
	datasets: [
		{
			label: 'Revenue',
			data: labels.map((label, index) => nums[index]),
			// backgroundColor: '#408AFD',
			backgroundColor: '#35A2EB',
		},
	],
};

export default function BarChart() {
	return <Bar options={options} data={data} />;
}
