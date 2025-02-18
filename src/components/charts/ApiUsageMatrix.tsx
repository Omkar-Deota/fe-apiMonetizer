import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Select, SelectItem } from '@heroui/react';
import { chartData, intervals, labels } from '../../utils/constants';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const options = {
  responsive: true,
  plugins: {},
  layouts: {
    padding: 20
  }
};

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: chartData,
      borderColor: 'orange',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
};

export const ApiUsageMatrix = () => {
  return (
    <div className="bg-off-white p-4 rounded-lg shadow-xl flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <p className="text-primary-black font-semibold text-lg">
          API Usage Matrix
        </p>
        <Select
          className="w-40"
          placeholder="Select interval"
          aria-labelledby="Api-matrix"
        >
          {intervals.map((interval) => (
            <SelectItem key={interval.key}>{interval.label}</SelectItem>
          ))}
        </Select>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};
