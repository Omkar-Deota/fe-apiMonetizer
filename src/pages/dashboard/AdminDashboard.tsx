import React from 'react';
import { subscriptionStats } from '../../utils/constants';
import SubscriptionStatisticsCard from '../../components/cards/SubscriptionStatisticsCard';
import CustomGreeting from '../../components/common/CustomGreeting';
import { ApiUsageMatrix } from '../../components/charts/ApiUsageMatrix';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <CustomGreeting />

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {subscriptionStats?.map((stat) => (
          <SubscriptionStatisticsCard {...stat} />
        ))}
      </div>

      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-3">
        <ApiUsageMatrix />
      </div>
    </div>
  );
};

export default AdminDashboard;
