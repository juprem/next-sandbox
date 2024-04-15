import { ReactNode } from 'react';
import styles from './Content.module.scss';
interface ContentProps {
    children: ReactNode;
}

export function Content({ children }: ContentProps) {
    return <div className={styles.container}>{children}</div>;
}
