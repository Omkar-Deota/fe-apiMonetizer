import {
  Modal,
  ModalContent,
  ModalHeader,
  Button,
  ModalFooter,
  Spinner
} from '@heroui/react';
import { IModalProps } from './modal.type';
import { useState } from 'react';

export const AddApiModal: React.FC<IModalProps> = ({ isOpen, onClose }) => {
  const [creatingKey, setCreatingKey] = useState<boolean>(false);

  const handleCreateApiKey = () => {
    setCreatingKey(true);
    setInterval(() => {
      setCreatingKey(false);
      onClose();
    }, 2000);
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
              New Api Key
            </ModalHeader>
            <div className="flex p-5 text-sm font-bold text-dark-gray"></div>

            <ModalFooter>
              <Button
                className="bg-blue text-off-white mt-5 min-h-10 "
                type="submit"
                onPress={handleCreateApiKey}
                isDisabled={creatingKey}
              >
                {creatingKey ? <Spinner /> : 'Create'}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
