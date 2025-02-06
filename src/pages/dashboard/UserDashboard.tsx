import { MySubscription } from "../../components/cards/MySubscription";
import SubscriptionStatisticsCard from "../../components/cards/SubscriptionStatisticsCard";
import { ApiUsageMatrix } from "../../components/charts/ApiUsageMatrix";
import { useAppContext } from "../../context/AuthContextProvider";
import { userDashboardStats } from "../../utils/constant";

export const UserDashboard = () => {
  const { userData } = useAppContext();
  let userName = userData?.firstName + " " + userData?.lastName;
  userName = userName.length > 10 ? userName.slice(0, 6) + "..." : userName;
  return (
    <div className="flex flex-col gap-6">
      {/* Greeting  */}
      <section className="flex lg:flex-row flex-col w-full justify-between mt-2">
        {/* Desktop View */}
        <div className="md:flex flex-col gap-1 w-3/4 mb-4 hidden flex-wrap">
          <p className="text-primary-black font-semibold text-2xl">
            Welcome, {userData?.firstName || userData?.lastName}!
          </p>
          <p className="font-normal text-primary-gray text-sm ">
            Here’s an overview of the platform’s performance.
          </p>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex-col gap-1 mb-2 absolute top-2 left-2">
          <p className="text-primary-black font-semibold md:text-2xl text-lg line-clamp-1 w-52">
            Welcome, {userName}
          </p>
          <p className="font-normal text-primary-gray md:text-sm text-[10px]n">
            Here’s an overview of the platform’s performance.
          </p>
        </div>
        <MySubscription />
      </section>

      {/* Api Usage details card */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-2">
        {userDashboardStats.map((item) => (
          <SubscriptionStatisticsCard
            key={item.id}
            Icon={item.Icon}
            title={item.title}
            value={item.value}
            subText={item.subText}
          />
        ))}
      </div>
      <section className="lg:w-1/2 w-full">
        <ApiUsageMatrix />
      </section>
    </div>
  );
};
