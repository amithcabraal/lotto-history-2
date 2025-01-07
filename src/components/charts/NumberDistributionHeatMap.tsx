import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { HeatMapData } from '../../types/lottery';
import { Hash } from 'lucide-react';

interface Props {
  data: HeatMapData[];
}

export const NumberDistributionHeatMap: React.FC<Props> = ({ data }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center gap-2 mb-4">
      <Hash className="w-6 h-6" />
      <h2 className="text-xl font-semibold">Number Distribution by Position</h2>
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="number" 
          type="number" 
          domain={[1, 59]} 
          label={{ value: 'Number', position: 'bottom' }} 
        />
        <YAxis 
          dataKey="position" 
          type="number" 
          domain={[1, 6]} 
          label={{ value: 'Position', angle: -90, position: 'left' }} 
        />
        <ZAxis 
          dataKey="frequency" 
          range={[50, 400]} 
          name="Frequency" 
        />
        <Tooltip 
          cursor={{ strokeDasharray: '3 3' }}
          content={({ payload }) => {
            if (payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="bg-white border p-2 shadow-lg">
                  <p>Number: {data.number}</p>
                  <p>Position: {data.position}</p>
                  <p>Frequency: {data.frequency}</p>
                </div>
              );
            }
            return null;
          }}
        />
        <Scatter 
          data={data} 
          fill="#8884d8"
          opacity={0.6}
        />
      </ScatterChart>
    </ResponsiveContainer>
  </div>
);