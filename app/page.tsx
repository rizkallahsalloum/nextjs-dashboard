import UserCards from './components/userCards/UserCards';

import CompletedTasks from './components/completedTasks/CompletedTasks';

import {
  earningsCard,
  totalProjectsCard,
  totalTasksCard,
  totalClientsCard,
  dataLineChart,
  ClientsRequests,
} from './data';
import LineCharts from './components/lineCharts/LineCharts';
import CustomTooltip from './components/customTooltip/CustomTooltip';
import ClientsRequestsTable from './clients/ClientsRequestsTable';
export default function HomePage() {
  return (
    <section className="content">
      <div className="grid__container">
        <div className="component_1">
          <UserCards {...earningsCard} />
          <UserCards {...totalProjectsCard} />
          <UserCards {...totalTasksCard} />
          <UserCards {...totalClientsCard} />
        </div>
        <div className="component_3">
          <CompletedTasks />
          {/* <CustomTooltip text="Hover over me for a tooltip">
            <button>Hover Me</button>
          </CustomTooltip> */}
        </div>

        <div className="component_4">
          {/* <PaymentAndTransactions /> */}
          <LineCharts {...dataLineChart} />
        </div>
        <div className="component_7">
          <ClientsRequestsTable data={ClientsRequests} pageSize={4} />
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
