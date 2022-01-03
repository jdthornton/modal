import { useState, ReactNode, CSSProperties } from 'react';
import FocusLock from 'react-focus-lock';
import classNames from '@jdthornton/classnames';
import useInert from '@jdthornton/useinert';
import useKeyPress from '@jdthornton/usekeypress';
import useLockBodyScroll from '@jdthornton/uselockbodyscroll';
import Portal from '@jdthornton/portal';

export type ModalProps = {
  children?: ReactNode;
  closeOnOverlayClick?: boolean;
  overlayClassName?: string;
  className?: string;
  showCloseButton?: boolean;
  overlayStyle?: CSSProperties;
  style?: CSSProperties;
  close: () => void;
  labelledBy?: string;
  describedBy?: string;
}

export const Modal = ({
  overlayClassName,
  className,
  overlayStyle = {},
  style = {},
  close,
  children,
  closeOnOverlayClick = true,
  showCloseButton,
  labelledBy,
  describedBy,
  ...props
}: ModalProps) => (
  <div {...props} style={overlayStyle} className={classNames("Modal",overlayClassName)} onClick={closeOnOverlayClick ? close : undefined}>
    <div style={style} role="dialog" aria-modal="true" aria-labelledby={labelledBy} aria-describedby={describedBy} className={classNames("Modal__content",className)} onClick={(e) => {e.stopPropagation();}}>
      {showCloseButton && <button type="button" className="Modal__closeIcon" onClick={close}>&times;</button>}
      {children}
    </div>
  </div>
)

export type UseModalParams = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useModal = () => {
  const [isOpen,setIsOpen] = useState(false);
  return {
    isOpen,
    open: (a: any = true) => setIsOpen(a),
    close: () => setIsOpen(false)
  }
}

export const PortalModal = ({
  children,
  ...props
}: ModalProps) => (
  <Portal>
    <FocusLock>
      <Modal {...props}>
        {children}
      </Modal>
    </FocusLock>
  </Portal>
)

export type ModalContainerProps = {
  closeOnEsc?: boolean;
  inertQuerySelector?: string;
} & ModalProps

export default function ModalContainer({
  closeOnEsc = true,
  children,
  inertQuerySelector = "#root",
  ...props
}: ModalContainerProps) {
  useKeyPress(closeOnEsc ? props.close : null,27)
  useInert(inertQuerySelector)
  useLockBodyScroll()
  return(
    <PortalModal {...props}>
      {children}
    </PortalModal>
  )
}
