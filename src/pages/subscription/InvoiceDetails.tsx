import { Button } from '@heroui/react';
import React, { useState } from 'react';
import { EyeIcon } from '../../assets/icons';
import { PreviousInvoicesModal } from '../../components/modal/PreviousInvoices';

const InvoiceDetails: React.FC = () => {
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);

  const handleInvoiceModal = () => {
    setIsInvoiceModalOpen(!isInvoiceModalOpen);
  };

  return (
    <section className="border-2 border-silver p-2 flex flex-col gap-6 rounded-xl">
      <div className="flex justify-between">
        <h2 className="text-primary-gray font-medium text-lg">
          Invoice Details
        </h2>

        <Button
          className="text-blue border-blue border-2 bg-off-white font-semibold"
          onPress={handleInvoiceModal}
        >
          <EyeIcon />
          View all invoices
        </Button>
      </div>

      <div className="flex gap-[35%]">
        <div className="flex flex-col">
          <p className="text-primary-gray text-sm font-medium">Invoice</p>

          <p>77788-9961444341</p>
        </div>

        <div className="flex flex-col">
          <p className="text-primary-gray text-sm font-medium">Date of issue</p>

          <p>22nd december 2024</p>
        </div>
      </div>

      <div className="flex justify-between text-light-gray text-sm">
        <p>Item</p>

        <p>Amount</p>
      </div>

      <div className="bg-light-gray h-[2px] w-full -mt-2"></div>

      <div className="flex justify-between text-sm">
        <p>Subscription charges</p>

        <p>$99</p>
      </div>

      {isInvoiceModalOpen && (
        <PreviousInvoicesModal
          isOpen={isInvoiceModalOpen}
          onClose={handleInvoiceModal}
        />
      )}
    </section>
  );
};

export default InvoiceDetails;
