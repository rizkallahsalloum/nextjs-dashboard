'use client';

import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

import styles from './lineCharts.module.scss';
import Link from 'next/link';

const data = [
  {
    name: 'Jan',
    tasks: 6,
  },
  {
    name: 'Feb',
    tasks: 3,
  },
  {
    name: 'Mar',
    tasks: 8,
  },
  {
    name: 'Apr',
    tasks: 4,
  },
  {
    name: 'May',
    tasks: 22,
  },
  {
    name: 'Jun',
    tasks: 18,
  },
];
interface LinChartsProps {
  title: string;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    let valueKey = Object.keys(data).find((key) => key !== 'name');

    if (valueKey) {
      // Check if valueKey is defined
      const value = data[valueKey];

      return (
        <div className={styles.custom_tooltip}>
          <p className={styles.custom_tooltip_label}>
            {value} {valueKey}
          </p>
        </div>
      );
    }
  }
  // if (active && payload && payload.length) {
  //   const data = payload[0].payload;
  //   let valueKey = Object.keys(data).find((key) => key !== 'name');
  //   const value = data[valueKey];

  //   return (
  //     <div className={styles.custom_tooltip}>
  //       <p className={styles.custom_tooltip_label}>
  //         {value} {valueKey}
  //       </p>
  //     </div>
  //   );
  // }
  // return null;
};

const highestTask = data.reduce((max, obj) => Math.max(max, obj.tasks), 0);
const LineCharts: React.FC<LinChartsProps> = ({ title }) => {
  return (
    <div className={styles.line__charts}>
      <div className={`${styles.display__flex} ${styles.flex__center}`}>
        <h3 className="component__title">{title}</h3>
        <Link href={'/tasks'} className={styles.line__charts_link}>
          Open
        </Link>
      </div>
      <div className={styles.line__charts_highest_task}>
        <span>{highestTask}</span> Best result
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="8" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: '#7f7f96' }} />
          <Tooltip
            contentStyle={{ background: 'transparent', border: 'none' }}
            labelStyle={{ display: 'none' }}
            content={<CustomTooltip />}
          />

          <Line
            type="monotone"
            dataKey="tasks"
            strokeWidth={3}
            stroke="hsl(165, 40%, 62%)"
            activeDot={{ r: 8 }}
            fill="#fff"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
