import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const PieChartPlot = () => {
  const data01 = [
    {
      name: "Twitter",
      value: 200400,
    },
    {
      name: "Facebook",
      value: 205000,
    },
    {
      name: "Instagram",
      value: 23400,
    },
    {
      name: "Snapchat",
      value: 20000,
    },
    {
      name: "LinkedIn",
      value: 29078,
    },
    {
      name: "YouTube",
      value: 18900,
    },
  ];
 
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={730} height={250}>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default PieChartPlot;
