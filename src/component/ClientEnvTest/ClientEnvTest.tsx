'use client';

import { useState } from 'react';
import { Modal } from '@/component/Modal/Modal';

export function ClientEnvTest() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>Open</button>
            <Modal open={open} onClose={() => setOpen(false)}>
                Modal
            </Modal>
        </>
    );
}
