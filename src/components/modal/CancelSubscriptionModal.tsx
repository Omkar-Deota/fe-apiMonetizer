import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button
} from '@heroui/react';
import { IModalProps } from './modal.type';

export const CancelSubscriptionModal: React.FC<IModalProps> = ({
  isOpen,
  onClose
}) => {
  const handleCancelSubscription = () => {
    alert('Cancelled');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="p-2 max-w-lg h-fit max-h-full"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 p-2">
              Cancel from the next billing cycle
            </ModalHeader>
            <p className=" p-2">
              Are you sure you want to cancel your subscription? It’ll be
              applicable from the next billing cycle.
            </p>

            <ModalFooter className="">
              <Button
                className="bg-white border-2 border-blue text-blue"
                onPress={onClose}
              >
                No
              </Button>
              <Button
                className="bg-error text-off-white"
                type="submit"
                onPress={handleCancelSubscription}
              >
                Cancel
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
