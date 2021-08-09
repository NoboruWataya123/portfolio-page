import React from 'react'
import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'
import Image from 'next/image'

export default function Sidebar({...props}:SidebarProps):JSX.Element {
    return (
        <>
            <div {...props} className={styles.sidebar}>
                <div className={styles.sidebarTitle}>Experiences</div>
                <section className={styles.sidebarSection}>
                    <div>
                    <Image 
                    className={styles.image}
                    src='/blog.jpg'
                    width={84}
                    height={84}
                    alt='pic'
                    />
                    </div>
                    <div className={styles.sidebarSectionText}>
                        <div className={styles.sidebarDate}>Feb 2017 - Current</div>
                        <div className={styles.sidebarHead}>Front-end developer</div>
                        <p className={styles.sidebardesc}>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </section>
                <section className={styles.sidebarSection}>
                    <div>
                    <Image 
                    className={styles.image}
                    src='/blog.jpg'
                    width={84}
                    height={84}
                    alt='pic'
                    />
                    </div>
                    <div className={styles.sidebarSectionText}>
                        <div className={styles.sidebarDate}>Aug 2016 - Feb 2018</div>
                        <div className={styles.sidebarHead}>Full-stack developer</div>
                        <p className={styles.sidebardesc}>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </section>
                <section className={styles.sidebarSection}>
                    <div>
                    <Image 
                    className={styles.image}
                    src='/blog.jpg'
                    width={84}
                    height={84}
                    alt='pic'
                    />
                    </div>
                    <div className={styles.sidebarSectionText}>
                        <div className={styles.sidebarDate}>Jun 2015 - Aug 2016</div>
                        <div className={styles.sidebarHead}>Junior front-end developer</div>
                        <p className={styles.sidebardesc}>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </section>
            </div>
        </>
    )
}
