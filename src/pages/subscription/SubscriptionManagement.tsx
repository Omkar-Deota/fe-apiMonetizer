import CustomBreadcrumbs from '../../components/common/CustomBreadCrumb';
import CustomGreeting from '../../components/common/CustomGreeting';
import InvoiceDetails from './InvoiceDetails';
import PlanDetails from './PlanDetails';

const SubscriptionManagement: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <CustomBreadcrumbs items="Manage subscription" />
      <CustomGreeting />

      <section className="w-full bg-off-white p-2 flex flex-col gap-6 rounded-lg ">
        <PlanDetails />
        <InvoiceDetails />
      </section>
    </div>
  );
};

export default SubscriptionManagement;
