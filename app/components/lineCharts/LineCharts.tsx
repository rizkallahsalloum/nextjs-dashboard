'use client';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import styles from './lineCharts.module.scss';

// type Props = {
//   name: string;
//   tasks: number;
// };

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const valueKey = Object.keys(data).find((key) => key !== 'name');
    const value = data[valueKey];

    return (
      <div className={styles.custom_tooltip}>
        <p className={styles.custom_tooltip_title}>{data.name}</p>
        <p className={styles.custom_tooltip_label}>
          {valueKey}: {value}
        </p>
      </div>
    );
  }
  return null;
};
const data = [
  {
    name: 'Sun',
    uv: 4000,
    tasks: 2400,
    amt: 2400,
  },
  {
    name: 'Mon',
    uv: 3000,
    tasks: 1398,
    amt: 2210,
  },
  {
    name: 'Tue',
    uv: 2000,
    tasks: 9800,
    amt: 2290,
  },
  {
    name: 'Wed',
    uv: 2780,
    tasks: 3908,
    amt: 2000,
  },
  {
    name: 'Thu',
    uv: 1890,
    tasks: 4800,
    amt: 2181,
  },
  {
    name: 'Fri',
    uv: 2390,
    tasks: 3800,
    amt: 2500,
  },
  {
    name: 'Sat',
    tasks: 1,
  },
];

const LineCharts = () => {
  return (
    <div className={styles.line_charts}>
      <h3 className={styles.component__title}>Payment and Transactions</h3>
      <ResponsiveContainer width="99%" height={350}>
        <LineChart
          // width={500}
          // height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip
            contentStyle={{ background: 'transparent', border: 'none' }}
            labelStyle={{ display: 'none' }}
            // position={{ x: -30, y: 70 }}
            content={<CustomTooltip />}
          />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="tasks"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
