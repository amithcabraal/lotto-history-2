import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DrawNumberStats } from '../../types/lottery';
import { ArrowUpDown } from 'lucide-react';

interface Props {
  data: DrawNumberStats[];
}

export const NumberRangeChart: React.FC<Props> = ({ data }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center gap-2 mb-4">
      <ArrowUpDown className="w-6 h-6" />
      <h2 className="text-xl font-semibold">Number Range per Draw</h2>
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="date" 
          tickFormatter={(value) => new Date(value).toLocaleDateString()}
        />
        <YAxis domain={[0, 60]} />
        <Tooltip
          labelFormatter={(value) => new Date(value).toLocaleDateString()}
          formatter={(value: number, name: string) => [value, name]}
        />
        <Bar 
          dataKey="range" 
          fill="#8884d8" 
          opacity={0.3}
          name="Range"
        />
        <Line 
          type="monotone" 
          dataKey="max" 
          stroke="#82ca9d" 
          name="Maximum"
        />
        <Line 
          type="monotone" 
          dataKey="min" 
          stroke="#ff7300" 
          name="Minimum"
        />
      </ComposedChart>
    </ResponsiveContainer>
  </div>
);