import {ReactNode} from 'react';

interface DashboardLayoutProps {
    children: ReactNode;
}

export function DashboardLayout({children}: DashboardLayoutProps) {
    return (
        <>
            <div style={{
                width: 'fit-content',
                backgroundColor: 'wheat',
                borderRadius: '5px',
                padding: '2px',
                marginBottom: "1rem"
            }}>
                Layout file Inside Dashboard, must accept a children props
            </div>
            <div>{children}</div>
        </>
    );
}

export default DashboardLayout;
