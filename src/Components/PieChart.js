import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: ['Week1', 'Week2', 'Week3', 'Week4'],
	datasets: [
		{
			label: 'Installs',
			data: [4000, 9000, 4000, 5000],
			backgroundColor: ['#1E74FF', '#FF6384', '#FE764B', '#70CF98'],
			borderColor: ['#74A0FF', '#FF8691', '#FE936A', '#79CFB3'],
			borderWidth: 1,
		},
	],
};

export default function App() {
	return <Pie style={{ padding: '0', margin: '0' }} data={data} />;
}
