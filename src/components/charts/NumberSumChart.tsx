import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DrawNumberStats } from '../../types/lottery';
import { Calculator } from 'lucide-react';

interface Props {
  data: DrawNumberStats[];
}

export const NumberSumChart: React.FC<Props> = ({ data }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center gap-2 mb-4">
      <Calculator className="w-6 h-6" />
      <h2 className="text-xl font-semibold">Sum of Numbers per Draw</h2>
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="date" 
          tickFormatter={(value) => new Date(value).toLocaleDateString()}
        />
        <YAxis domain={['auto', 'auto']} />
        <Tooltip
          labelFormatter={(value) => new Date(value).toLocaleDateString()}
          formatter={(value: number) => [value, 'Sum']}
        />
        <Line 
          type="monotone" 
          dataKey="sum" 
          stroke="#8884d8" 
          dot={false}
          name="Sum"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);