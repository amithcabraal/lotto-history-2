import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PrizeAnalysisData } from '../../types/lottery';
import { PoundSterling } from 'lucide-react';

interface Props {
  data: PrizeAnalysisData[];
}

export const PrizeAnalysisChart: React.FC<Props> = ({ data }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center gap-2 mb-4">
      <PoundSterling className="w-6 h-6" />
      <h2 className="text-xl font-semibold">Prize Analysis</h2>
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="biggestWin" stroke="#8884d8" name="Biggest Win" />
        <Line type="monotone" dataKey="nextEstimated" stroke="#82ca9d" name="Next Estimated" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);