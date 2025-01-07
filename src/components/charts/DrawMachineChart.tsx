import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartData } from '../../types/lottery';
import { Cog } from 'lucide-react';

interface Props {
  data: ChartData[];
}

export const DrawMachineChart: React.FC<Props> = ({ data }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center gap-2 mb-4">
      <Cog className="w-6 h-6" />
      <h2 className="text-xl font-semibold">Draw Machine Usage</h2>
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);