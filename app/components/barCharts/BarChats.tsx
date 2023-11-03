'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import Link from 'next/link';
import styles from './barCharts.module.scss';

//   {
//     name: 'Mo',
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Tu',
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'We',
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Th',
//     pv: 1,
//     amt: 1,
//   },
//   {
//     name: 'Fr',
//     pv: 3,
//     amt: 5,
//   },
// ];
const data = [
  {
    name: 'Mo',
    pv: 3,
    hr: 8,
  },
  {
    name: 'Tu',
    pv: 6,
  },
  {
    name: 'We',
    pv: 4,
  },
  {
    name: 'Th',
    pv: 6.7,
  },
  {
    name: 'Fr',
    pv: 3,
  },
];
interface BarChatsProps {
  title: string;
}
const longestHours = data.reduce((max, obj) => Math.max(max, obj.pv), 0);
const BarChats: React.FC<BarChatsProps> = ({ title }) => {
  return (
    <div className={styles.bar__charts}>
      <div className={`${styles.display__flex} ${styles.flex__center}`}>
        <h3 className="component__title">{title}</h3>
        <Link href={'/productivity'} className={styles.bar__charts_link}>
          Open
        </Link>
      </div>
      <div className={styles.bar__charts_highest_task}>
        <span>{longestHours}h</span>
      </div>
      <div style={{ height: '20rem' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={400}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: -40,
              bottom: 5,
            }}
            barSize={10}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis dataKey="hr" />

            <CartesianGrid strokeDasharray="1 3" />
            <Bar
              radius={8}
              dataKey="pv"
              fill="hsl(165, 40%, 62%)"
              background={{ fill: '#eeedf5' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChats;
