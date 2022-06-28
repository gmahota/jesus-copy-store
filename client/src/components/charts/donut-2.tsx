import {ResponsiveContainer, PieChart, Pie, Cell} from "recharts";

export type CustomTooltipProps = {
  active?: boolean;
  payload?: any;
};

const Donut2: React.FC = () => {
  const data = [
    {name: "Group A", value: 400},
    {name: "Group B", value: 300},
    {name: "Group C", value: 300},
    {name: "Group D", value: 200},
  ];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div style={{width: "100%", height: 400}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            //cx={420}
            //cy={200}
            startAngle={180}
            endAngle={0}
            innerRadius={100}
            //outerRadius={80}
            //fill="#8884d8"
            paddingAngle={1}
            dataKey="value">
            {data.map((entry, index) => {
              return (
                <Cell key={entry.name} fill={colors[index % colors.length]} />
              );
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Donut2;
