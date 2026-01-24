import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface WorkChartProps {
    data: { label: string; percentage: number }[];
}

const COLORS = ['#00ADB5', '#EEEEEE', '#FF5722', '#393E46'];

const WorkChart: React.FC<WorkChartProps> = ({ data }) => {
    // Transform key 'label' to 'name' for Recharts if needed, or just map
    const chartData = data.map(item => ({ name: item.label, value: item.percentage }));

    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }: { name?: string; percent?: number }) => `${name || ''} ${((percent || 0) * 100).toFixed(0)}%`}
                    >
                        {chartData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                        }}
                        itemStyle={{ color: '#000' }}
                    />
                    <Legend verticalAlign="bottom" height={36} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WorkChart;
