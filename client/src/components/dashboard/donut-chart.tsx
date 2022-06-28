import {
  ResponsiveContainer,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {getColor} from "functions/colors";

export type CustomTooltipProps = {
  active?: boolean;
  payload?: any;
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({active, payload}) => {
  if (active && payload && payload.length) {
    const {name, value} = payload[0].payload;
    return (
      <div className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white shadow-lg rounded-lg p-2 text-xs">
        <div>
          <span className="font-bold">{name}:</span>{" "}
          <span className="font-normal">{value}</span>
        </div>
      </div>
    );
  }
  return null;
};

export const Donut1: React.FC = () => {
  const data: {name: string; value: number}[] = [
    {name: "Desktop", value: 400},
    {name: "Mobile", value: 300},
    {name: "Tablet", value: 200},
  ];
  const colors: string[] = [
    getColor("blue-200"),
    getColor("blue-400"),
    getColor("blue-600"),
  ];

  return (
    <div style={{width: "100%", height: 240}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} innerRadius={60} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => {
              return (
                <Cell key={entry.name} fill={colors[index % colors.length]} />
              );
            })}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
