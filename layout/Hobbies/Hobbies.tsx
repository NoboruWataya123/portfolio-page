import React from 'react'
import { HobbiesProps } from './Hobbies.props'
import styles from './Hobbies.module.css'
import cn from 'classnames'
import Image from 'next/image'

export default function Hobbies({children, className, ...props}:HobbiesProps):JSX.Element {
    return (
        <div className={cn(className, styles.hobbies)} {...props}>
            <div className={styles.title}>Hobbies</div>
            <section className={styles.sections}>
            <Image 
                className={styles.image}
                src='/gaming.jpg'
                width={300}
                height={140}
                alt='pic'
                />
            <article className={styles.hobbiesTitle}>Gaming</article>
            <div className={styles.hobbiesdesc}>Quisque feugiat malesuada molestie.</div>
            </section>
            <section className={styles.sections}>
            <Image 
                className={styles.image}
                src='/cooking.jpg'
                width={300}
                height={140}
                alt='pic'
                />
            <article className={styles.hobbiesTitle}>Cooking</article>
            <div className={styles.hobbiesdesc}>Quisque feugiat malesuada molestie.</div>
            </section>
            <section className={styles.sections}>
            <Image 
                className={styles.image}
                src='/biking.jpg'
                width={300}
                height={140}
                alt='pic'
                />
            <article className={styles.hobbiesTitle}>Biking</article>
            <div className={styles.hobbiesdesc}>Quisque feugiat malesuada molestie.</div>
            </section>
        </div>
    )
}
