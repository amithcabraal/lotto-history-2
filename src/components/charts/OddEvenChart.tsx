import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartData } from '../../types/lottery';
import { CircleDot } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F'];

interface Props {
  data: ChartData[];
}

export const OddEvenChart: React.FC<Props> = ({ data }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center gap-2 mb-4">
      <CircleDot className="w-6 h-6" />
      <h2 className="text-xl font-semibold">Odd/Even Split</h2>
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);