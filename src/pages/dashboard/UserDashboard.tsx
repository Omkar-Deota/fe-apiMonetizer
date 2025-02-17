import React from 'react';
import { MySubscription } from '../../components/cards/MySubscription';
import { ApiUsageMatrix } from '../../components/charts/ApiUsageMatrix';
import CustomGreeting from '../../components/common/CustomGreeting';
import { subscriptionStats } from '../../utils/constants';
import SubscriptionStatisticsCard from '../../components/cards/SubscriptionStatisticsCard';

const UserDashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex justify-between">
        <CustomGreeting />
        <MySubscription />
      </section>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {subscriptionStats?.map((stat) => (
          <SubscriptionStatisticsCard {...stat} key={stat.title} />
        ))}
      </div>

      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-3">
        <ApiUsageMatrix />
      </div>
    </div>
  );
};

export default UserDashboard;
