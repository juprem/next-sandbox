import { ReactNode } from 'react';

interface ModalProps {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}

export function Modal({ children, open, onClose }: ModalProps) {
    return (
        <dialog open={open} aria-modal={true}>
            {children}
            <button onClick={onClose}>ok</button>
        </dialog>
    );
}
