import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@chakra-ui/react';
import styles from './CartModal.module.css';

interface OverlayProps {
  children: React.ReactNode;
}

const portalElement = document.getElementById('overlays')!;

const CartModal: React.FC<OverlayProps> = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export const ModalOverlay: React.FC<OverlayProps> = ({ children }) => {
  return (
    <Box className={styles.modal}>
      <Box className={styles.content}>{children}</Box>
    </Box>
  );
};

export const Backdrop: React.FC = () => {
  return <Box className={styles.backdrop}></Box>;
};

export default CartModal;
