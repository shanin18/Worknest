/* eslint-disable react/prop-types */
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const MyModal = ({ isOpen, onClose, title, children }) => {
  return (
    <div>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="border-b">{title || "Customer Info"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="pb-5">{children}</ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MyModal;
