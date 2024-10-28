import {
  LineChart as LChart,
  Line,
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChart = () => {
  const studentMarks = [
    { id: 1, name: "Alice", math: 75, physics: 90, chemistry: 88 },
    { id: 2, name: "Brian", math: 58, physics: 62, chemistry: 80 },
    { id: 3, name: "Chloe", math: 92, physics: 45, chemistry: 91 },
    { id: 4, name: "David", math: 48, physics: 54, chemistry: 85 },
    { id: 5, name: "Ella", math: 65, physics: 75, chemistry: 72 },
    { id: 6, name: "Frank", math: 90, physics: 59, chemistry: 93 },
    { id: 7, name: "Grace", math: 55, physics: 83, chemistry: 78 },
    { id: 8, name: "Hannah", math: 75, physics: 52, chemistry: 94 },
    { id: 9, name: "Isaac", math: 97, physics: 70, chemistry: 68 },
    { id: 10, name: "Julia", math: 82, physics: 88, chemistry: 85 },
  ];

  return (
    <div>
      <LChart width={800} height={300} data={studentMarks}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey={"physics"} stroke="green"></Line>
      </LChart>
      <BarChart
        width={1200}
        height={300}
        data={studentMarks}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="math"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="physics"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
        <Bar
          dataKey="chemistry"
          fill="orange"
          activeBar={<Rectangle fill="skyblue" stroke="orange" />}
        />
      </BarChart>
    </div>
  );
};

export default LineChart;
