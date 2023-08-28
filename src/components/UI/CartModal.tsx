import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@chakra-ui/react';
import styles from './CartModal.module.css';

interface PortalProps {
  children: React.ReactNode;
  onDisplayCart: (option: boolean) => void;
}

const portalElement = document.getElementById('overlays')!;

const CartModal: React.FC<PortalProps> = ({ children, onDisplayCart }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onDisplayCart={onDisplayCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

interface OverlayProps {
  children: React.ReactNode;
}

export const ModalOverlay: React.FC<OverlayProps> = ({ children }) => {
  return (
    <Box className={styles.modal}>
      <Box className={styles.content}>{children}</Box>
    </Box>
  );
};

interface BackdropProps {
  onDisplayCart: (option: boolean) => void;
}

export const Backdrop: React.FC<BackdropProps> = ({ onDisplayCart }) => {
  return (
    <Box className={styles.backdrop} onClick={() => onDisplayCart(false)}></Box>
  );
};

export default CartModal;
