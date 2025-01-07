import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { OddEvenPerDrawData } from '../../types/lottery';
import { SplitSquareHorizontal } from 'lucide-react';

interface Props {
  data: OddEvenPerDrawData[];
}

export const OddEvenPerDrawChart: React.FC<Props> = ({ data }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center gap-2 mb-4">
      <SplitSquareHorizontal className="w-6 h-6" />
      <h2 className="text-xl font-semibold">Odd/Even Numbers Per Draw</h2>
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="odd" name="Odd Numbers" fill="#8884d8" stackId="stack" />
        <Bar dataKey="even" name="Even Numbers" fill="#82ca9d" stackId="stack" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);