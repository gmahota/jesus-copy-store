import {ResponsiveContainer, Tooltip, PieChart, Pie, Cell} from "recharts";
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

const Pie1: React.FC = () => {
  const data = [
    {name: "Group A", value: 400},
    {name: "Group B", value: 300},
    {name: "Group C", value: 300},
    {name: "Group D", value: 200},
  ];
  const colors = [
    getColor("blue-500"),
    getColor("red-500"),
    getColor("green-500"),
    getColor("yellow-500"),
  ];

  return (
    <div style={{width: "100%", height: 400}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            //cx={200}
            //cy={200}
            //startAngle={180}
            //endAngle={0}
            innerRadius={0}
            fill="#8884d8"
            dataKey="value">
            {data.map((entry, index) => {
              return (
                <Cell key={entry.name} fill={colors[index % colors.length]} />
              );
            })}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Pie1;
