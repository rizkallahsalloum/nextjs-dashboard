import UserCards from './components/userCards/UserCards';
import PaymentAndTransactions from './components/paymentAndTransactions/PaymentAndTransactions';

import Featured from './components/featured/Featured';
import Chart from './components/chart/Chart';

import CompletedTasks from './components/completedTasks/CompletedTasks';

import {
  earningsCard,
  totalProjectsCard,
  totalTasksCard,
  totalClientsCard,
} from './data';

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
        </div>

        <div className="component_4">
          <PaymentAndTransactions />
        </div>

        <div className="component_7">
          <Featured />
        </div>
        <div className="component_8">
          <Chart />
        </div>
      </div>
    </section>
  );
}
