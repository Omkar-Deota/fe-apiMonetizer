import { Button } from '@heroui/react';
import React, { useState } from 'react';
import { CancelSubscriptionModal } from '../../components/modal/CancelSubscriptionModal';

const PlanDetails: React.FC = () => {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const handleCancelModal = () => {
    setIsCancelModalOpen(!isCancelModalOpen);
  };

  return (
    <section className="border-2 border-silver p-2 flex flex-col gap-6 rounded-xl">
      <div className="flex justify-between">
        <h2 className="text-primary-gray font-medium text-lg">Plan Details</h2>

        <Button
          className="text-error bg-light-red border-error font-semibold border-2"
          onPress={handleCancelModal}
        >
          Cancel Subscription
        </Button>
      </div>

      <div className="flex gap-[35%]">
        <div className="flex flex-col">
          <p className="text-primary-gray text-sm font-medium">
            Subscription Name
          </p>

          <p>Premium</p>
        </div>

        <div className="flex flex-col">
          <p className="text-primary-gray text-sm font-medium">
            Subscription Type
          </p>

          <p>$99 (Monthly)</p>
        </div>
      </div>

      <div className="flex flex-col">
        <p className="text-primary-gray text-sm">Start Date</p>

        <p>27 Dec 2024</p>
      </div>

      {isCancelModalOpen && (
        <CancelSubscriptionModal
          isOpen={isCancelModalOpen}
          onClose={handleCancelModal}
        />
      )}
    </section>
  );
};

export default PlanDetails;
