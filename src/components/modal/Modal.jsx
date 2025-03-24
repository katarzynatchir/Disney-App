import ReactDOM from 'react-dom';
import Button from '../Button';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const ModalContent = styled.div`
  background-color: var(--color-background);
  color: var(--color-text);
  width: 400px;
  max-width: 90%;
  padding: 1.5rem;
  border: 1px solid var(--color-accent);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {children}
        <Button onClick={onClose}>Close</Button>
      </ModalContent>
    </Overlay>,
    document.getElementById('modal-box')
  );
};

export default Modal;
