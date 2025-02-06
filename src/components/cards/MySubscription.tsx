import { useNavigate } from "react-router-dom";
import { WalletIcon } from "../../assets/icons";
import { CustomCard } from "../common/CustomCard";
export const MySubscription = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/app/manage-subscription");
  };

  return (
    <CustomCard
      className="flex flex-col bg-blue rounded-xl md:w-96 w-72 "
      isPressable={true}
      onPress={handleNavigate}
    >
      <p className="text-off-white font-semibold text-2xl">
        Your subscription plan
      </p>

      <p className="text-off-white/80 text-sm mt-3">Plan</p>

      <p className="text-xl font-semibold text-off-white -mt-1">
        Sales-Data-Pro
      </p>

      <div className="grid 2xl:grid-cols-2 grid-cols-1 text-off-white mt-2 text-sm">
        <div className="flex flex-col">
          <p className="text-off-white/80 font-light">Monthly Subscription</p>
          $99.99
        </div>

        <div className="flex flex-col text-sm ">
          <p className="text-off-white/80 font-light">Due Date</p>
          27 Dec 2024
        </div>

        <div className="absolute right-0 bottom-0">
          <WalletIcon />
        </div>
      </div>
    </CustomCard>
  );
};
