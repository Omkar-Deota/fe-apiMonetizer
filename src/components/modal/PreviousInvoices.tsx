import { Modal, ModalContent, ModalHeader, Button } from '@heroui/react';
import { IModalProps } from './modal.type';
import { invoiceData } from '../../utils/constants';

export const PreviousInvoicesModal: React.FC<IModalProps> = ({
  isOpen,
  onClose
}) => {
  const handleDownloadInvoices = () => {
    alert('Downloading....');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="p-2 max-w-md h-fit max-h-80"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 p-2">
              Previous Invoices
            </ModalHeader>
            <div className="flex justify-between p-5 text-sm font-bold text-dark-gray">
              <p>Date</p>
              <p>Amount</p>
            </div>
            <div className="max-h-48 overflow-auto">
              {invoiceData.map((item) => (
                <div
                  className="flex justify-between text-sm font-medium text-primary-gray p-2"
                  key={item.date}
                >
                  <p>{item.date}</p>
                  <p>{item.amount}</p>
                </div>
              ))}
            </div>

            <Button
              className="bg-blue text-off-white mx-10 mt-5 min-h-10"
              type="submit"
              onPress={handleDownloadInvoices}
            >
              Download
            </Button>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
