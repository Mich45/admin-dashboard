"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const PieChartPlot = () => {
  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
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
