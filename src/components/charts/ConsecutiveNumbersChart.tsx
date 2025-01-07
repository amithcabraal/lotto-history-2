import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ConsecutiveNumbersData } from '../../types/lottery';
import { ArrowRightFromLine } from 'lucide-react';

interface Props {
  data: ConsecutiveNumbersData[];
}

export const ConsecutiveNumbersChart: React.FC<Props> = ({ data }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center gap-2 mb-4">
      <ArrowRightFromLine className="w-6 h-6" />
      <h2 className="text-xl font-semibold">Consecutive Numbers per Draw</h2>
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 5]} />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="count" 
          stroke="#82ca9d" 
          name="Consecutive Numbers"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);