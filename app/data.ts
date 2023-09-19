export const menu = [
  {
    id: 1,
    title: 'Overview',
    url: '/',
    icon: '/overview-icon.svg',
  },
  {
    id: 2,
    title: 'Projects',
    url: '/projects',
    icon: '/projects-icon.svg',
  },
  {
    id: 3,
    title: 'Clients',
    url: '/clients',
    icon: '/clients-icon.svg',
  },
  {
    id: 4,
    title: 'Tasks',
    url: '/tasks',
    icon: '/tasks-icon.svg',
  },
  {
    id: 5,
    title: 'Balance',
    url: '/balance',
    icon: '/balance-icon.svg',
  },
  {
    id: 6,
    title: 'Earnings',
    url: '/earnings',
    icon: '/earnings-icon.svg',
  },
];

export const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];

export const dataLineChart = {
  dataKeys: [
    { name: 'visits', color: '#82ca9d' },
    { name: 'clicks', color: '#8884d8' },
  ],
  data: [
    {
      name: 'Sun',
      visits: 4000,
      clicks: 2400,
    },
    {
      name: 'Mon',
      visits: 3000,
      clicks: 1398,
    },
    {
      name: 'Tue',
      visits: 2000,
      clicks: 3800,
    },
    {
      name: 'Wed',
      visits: 2780,
      clicks: 3908,
    },
    {
      name: 'Thu',
      visits: 1890,
      clicks: 4800,
    },
    {
      name: 'Fri',
      visits: 2390,
      clicks: 3800,
    },
    {
      name: 'Sat',
      visits: 3490,
      clicks: 4300,
    },
  ],
};

export const earningsCard = {
  color: '#23282d',
  icon: '/net-earnings-icon.svg',
  title: 'Net Earnings',
  amount: '11.238',
  dataKey: 'earnings',
  percentage: 45,
  chartData: [
    { name: 'Sun', earnings: 120 },
    { name: 'Mon', earnings: 300 },
    { name: 'Tue', earnings: 650 },
    { name: 'Wed', earnings: 450 },
    { name: 'Thu', earnings: 280 },
    { name: 'Fri', earnings: 700 },
    { name: 'Sat', earnings: 450 },
  ],
};
export const totalProjectsCard = {
  color: '#23282d',
  icon: '/folder-icon.svg',
  title: 'Total Projects',
  amount: '19',
  dataKey: 'projects',
  percentage: 60,
  chartData: [
    { name: 'Sun', projects: 4 },
    { name: 'Mon', projects: 2 },
    { name: 'Tue', projects: 1 },
    { name: 'Wed', projects: 3 },
    { name: 'Thu', projects: 7 },
    { name: 'Fri', projects: 1 },
    { name: 'Sat', projects: 3 },
  ],
};
export const totalTasksCard = {
  color: '#d0d0d0',
  icon: '/tasksquare-icon.svg',
  title: 'Total Tasks',
  amount: '12',
  dataKey: 'tasks',
  percentage: 70,
  chartData: [
    { name: 'Sun', tasks: 400 },
    { name: 'Mon', tasks: 600 },
    { name: 'Tue', tasks: 500 },
    { name: 'Wed', tasks: 700 },
    { name: 'Thu', tasks: 400 },
    { name: 'Fri', tasks: 500 },
    { name: 'Sat', tasks: 450 },
  ],
};
export const totalClientsCard = {
  color: '#1f3f49',
  icon: '/clients-icon.svg',
  title: 'Total Clients',
  amount: '25',
  dataKey: 'clients',
  percentage: -3,
  chartData: [
    { name: 'Sun', clients: 400 },
    { name: 'Mon', clients: 600 },
    { name: 'Tue', clients: 500 },
    { name: 'Wed', clients: 700 },
    { name: 'Thu', clients: 400 },
    { name: 'Fri', clients: 500 },
    { name: 'Sat', clients: 450 },
  ],
};

export const dataTasks = [
  {
    name: 'Sun',
    tasks: 3,
  },
  {
    name: 'Mon',
    tasks: 7,
  },
  {
    name: 'Tue',
    tasks: 2,
  },
  {
    name: 'Wed',
    tasks: 4,
  },
  {
    name: 'Thu',
    tasks: 8,
  },
  {
    name: 'Fri',
    tasks: 12,
  },
  {
    name: 'Sat',
    tasks: 6,
  },
];

export const ClientsRequests = [
  {
    id: 1,
    name: 'John Smith',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    ISurgent: true,
    requests: 3,
    hours: '5 hours',
  },
  {
    id: 2,
    name: 'Emily Johnson',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    ISurgent: false,
    requests: 7,
    hours: '12 hours',
  },
  {
    id: 3,
    name: 'Michael Brown',
    img: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    ISurgent: true,
    requests: 5,
    hours: '8 hours',
  },
  {
    id: 4,
    name: 'Sarah Davis',
    img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ISurgent: false,
    requests: 4,
    hours: '10 hours',
  },
  {
    id: 5,
    name: 'David Wilson',
    img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    ISurgent: true,
    requests: 6,
    hours: '7 hours',
  },
  {
    id: 6,
    name: 'Linda Lee',
    img: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ISurgent: false,
    requests: 2,
    hours: '3 hours',
  },
  {
    id: 7,
    name: 'Robert Miller',
    img: 'https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    ISurgent: true,
    requests: 8,
    hours: '14 hours',
  },
  {
    id: 8,
    name: 'Susan Clark',
    img: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ISurgent: false,
    requests: 9,
    hours: '11 hours',
  },
  {
    id: 9,
    name: 'James Turner',
    img: 'https://images.unsplash.com/photo-1621353269062-6aa0165576f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ISurgent: true,
    requests: 5,
    hours: '9 hours',
  },
  {
    id: 10,
    name: 'Karen Hall',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ISurgent: false,
    requests: 3,
    hours: '6 hours',
  },
];
