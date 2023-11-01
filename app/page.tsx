import UserCards from './components/userCards/UserCards';
import CompletedTasks from './components/completedTasks/CompletedTasks';
import data from '../_data/db.json';

import LineCharts from './components/lineCharts/LineCharts';
import ClientsRequestsTable from './clients/ClientsRequestsTable';
import BarChats from './components/barCharts/BarChats';
import TasksPage from './tasks/page';

export default function HomePage() {
  return (
    <section className="content">
      <div className="grid__container">
        <div className="component_1">
          <UserCards />
        </div>
        <div className="component_2">
          <div className="column-1">
            <LineCharts title={'Completed Tasks'} />
          </div>
          <div className="column-2">
            <BarChats title={'Working Hours'} />
          </div>
          <div className="column-3">
            <TasksPage />
          </div>
        </div>
        {/* <div className="component_3"></div>
        <div className="component_4"></div> */}

        <div className="component_7">
          <ClientsRequestsTable pageSize={4} />
        </div>
        {/*
        <div className="component_7">
          <Featured />
        </div>
        <div className="component_8">
          <Chart />
        </div> */}
      </div>
    </section>
  );
}
