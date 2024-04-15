import { ReactNode } from 'react';

export function Square({ children }: { children: ReactNode }) {
    return <div style={{ width: '100px', height: '100px', backgroundColor: 'wheat' }}>{children}</div>;
}
