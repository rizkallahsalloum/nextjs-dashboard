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

export const earningsCard = {
  color: '#8884d8',
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
  color: 'yellowGreen',
  icon: '/folder-icon.svg',
  title: 'Total Projects',
  amount: '19',
  dataKey: 'projects',
  percentage: 60,
  chartData: [
    { name: 'Sun', projects: 400 },
    { name: 'Mon', projects: 600 },
    { name: 'Tue', projects: 500 },
    { name: 'Wed', projects: 700 },
    { name: 'Thu', projects: 400 },
    { name: 'Fri', projects: 500 },
    { name: 'Sat', projects: 450 },
  ],
};
export const totalTasksCard = {
  color: '#8884d8',
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
  color: '#8884d8',
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
