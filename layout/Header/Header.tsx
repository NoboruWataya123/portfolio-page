import React from 'react'
import { HeaderProps } from './Header.props'
import styles from './Header.module.css'
import Image from 'next/image'

export default function Header({...props}:HeaderProps):JSX.Element {
    return (
        <div {...props} className={styles.headerContainer}>
                <Image 
                className={styles.image}
                src='/pic.jpg'
                width={300}
                height={200}
                alt='pic'
                />
                <div className={styles.headerText}>
                    <div className={styles.header}>
                        <div className={styles.headerTitle}>Billy Pearson</div>
                        <div className={styles.headerDesc}>Front-end developer</div>
                    </div>
                    <div>
                        <div className={styles.headermail}>billy@example.com</div>
                        <div className={styles.headertel}>(+603) 546 624 342</div>
                    </div>
                    <p className={styles.headerP}>Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
                </div>
        </div>
    )
}
