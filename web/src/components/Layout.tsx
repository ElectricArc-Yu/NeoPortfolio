import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Layout.module.css';

const Layout: React.FC = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} YuChenhaoran. All Rights Reserved. / 完全版权所有
                    </p>
                    <p className={styles.disclaimer}>
                        Game Designer Portfolio & Case Studies
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
