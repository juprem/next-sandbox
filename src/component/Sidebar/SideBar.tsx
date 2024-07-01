'use client';

import styles from './Sidebar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
interface SideBarProps {}
interface MenuLinks {
    pathname: string;
    name: string;
}

const linkMenu: MenuLinks[] = [
    { pathname: '/', name: 'Home' },
    { pathname: '/todos', name: 'Todos' },
    { pathname: '/todos/settings', name: 'Settings' },
];

export function SideBar({}: SideBarProps) {
    const pathname = usePathname();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {linkMenu.map((it) => (
                    <Link
                        href={it.pathname}
                        key={it.pathname}
                        className={pathname === it.pathname ? styles.active : styles.notActive}
                    >
                        <motion.div
                            whileHover={{
                                translateX: 5,
                            }}
                        >
                            {it.name}
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
