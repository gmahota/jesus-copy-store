import {getColor} from "functions/colors";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {random} from "functions/numbers";

export type CustomTooltipProps = {
  active?: boolean;
  payload?: any;
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({active, payload}) => {
  if (active && payload && payload.length) {
    const {name, profit, income} = payload[0].payload;
    return (
      <div className="p-2 text-xs text-gray-900 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
        <div className="font-bold">{name}</div>
        <div>
          <span className="font-bold">Sales:</span>{" "}
          <span className="font-normal">{profit}</span>
        </div>
        <div>
          <span className="font-bold">Conversions:</span>{" "}
          <span className="font-normal">{income}</span>
        </div>
      </div>
    );
  }
  return null;
};

const RechartsArea1: React.FC = () => {
  const colors = [
    {
      dataKey: "income",
      stroke: getColor("green-500"),
      fill: getColor("green-500"),
    },
    {
      dataKey: "profit",
      stroke: getColor("blue-500"),
      fill: getColor("blue-500"),
    },
  ];
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = Array.from(Array(12).keys()).map((i) => {
    return {
      name: labels[i],
      profit: random(100, 200),
      income: random(150, 250),
    };
  });

  return (
    <div style={{width: "100%", height: 300}}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} width={30} />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="bottom" height={48} />
          {colors.map((color, i) => (
            <Area
              key={i}
              type="monotone"
              dataKey={color.dataKey}
              stroke={color.stroke}
              fill={color.fill}
              strokeWidth={2}
              activeDot={{r: 8}}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default RechartsArea1;
