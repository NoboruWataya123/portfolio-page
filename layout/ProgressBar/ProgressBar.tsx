import React from 'react'
import { ProgressBarProps } from './ProgressBar.props'
import styles from './ProgressBar.module.css'
import ProgresBar from '../../components/ProgressBar/ProgressBar'

export default function ProgressBar({...props}:ProgressBarProps):JSX.Element {
    return (
        <div {...props} className={styles.progressBar}>
                <section className={styles.progressBarSection}>
                <p className={styles.title}>Frontend</p>
                <div className={styles.progressBarItem}>
                    <div className={styles.progresBartext}><span>JavaScript</span></div>
                    <ProgresBar appearance='8' />
                </div>
                <div className={styles.progressBarItem}>
                    <div className={styles.progresBartext}><span>React</span></div>
                    <ProgresBar appearance='8' />
                </div>
                <div className={styles.progressBarItem}>
                    <div className={styles.progresBartext}><span>CSS</span></div>
                    <ProgresBar appearance='8' />
                </div>
                <div className={styles.progressBarItem}>
                    <div className={styles.progresBartext}><span>Vue</span></div>
                    <ProgresBar appearance='6' />
                </div>
                <div className={styles.progressBarItem}>
                    <div className={styles.progresBartext}><span>Redux</span></div>
                    <ProgresBar appearance='6' />
                </div>
                <div className={styles.progressBarItem}>
                    <div className={styles.progresBartext}><span>TypeScript</span></div>
                    <ProgresBar appearance='7' />
                </div>
                </section>
                <section className={styles.progressBarSectionf}>
                    <p className={styles.title}>Design</p>
                <div className={styles.progressBarItem}>
                    <div className={styles.progresBartext}><span>Figma</span></div>
                    <ProgresBar appearance='7' />
                </div>
                <div className={styles.progressBarItem}>
                    <div className={styles.progresBartext}><span>Photoshop</span></div>
                    <ProgresBar appearance='5' />
                </div>
                </section>
        </div>
    )
}
