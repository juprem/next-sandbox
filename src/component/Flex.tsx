import { ReactNode } from 'react';

interface FlexProps {
    gap?: `${number}px` | `${number}rem`;
    direction?: 'column' | 'row';
    children: ReactNode;
}

export function Flex({ gap = '0rem', direction = 'row', children }: FlexProps) {
    return <div style={{ display: 'flex', gap: gap, flexDirection: direction }}>{children}</div>;
}
