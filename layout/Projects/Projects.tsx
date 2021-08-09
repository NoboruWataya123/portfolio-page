import React from 'react'
import { ProjectsProps } from './Projects.props'
import styles from './Projects.module.css'
import Image from 'next/image'

export default function Projects({...props}:ProjectsProps):JSX.Element {
    return (
        <>
            <div {...props} className={styles.projects}>
                <div className={styles.projectsTitle}>
                    Projects
                </div>
                <div className={styles.projectsMain}>
                    <div className={styles.projectsImage}>
                    <Image 
                    className={styles.image}
                    src='/recipe.png'
                    width={300}
                    height={200}
                    alt='pic'
                    />
                    </div>
                    <div className={styles.projectsText}>
                        <div className={styles.projectsTextTitle}>Recipe Blog</div>
                        <div className={styles.projectsTextdesc}>In this project, I work with HTML and CSS to create a responsive page .
                         The design is from devchallenge.io. Donec aliquam est dui, 
                         vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </div>
                    </div>
                </div>
                <div className={styles.projectsMain}>
                    <div className={styles.projectsImage}>
                    <Image 
                    className={styles.image}
                    src='/gallery.png'
                    width={300}
                    height={200}
                    alt='pic'
                    />
                    </div>
                    <div className={styles.projectsText}>
                        <div className={styles.projectsTextTitle}>My Gallery</div>
                        <div className={styles.projectsTextdesc}>In this project, I work with HTML and CSS to create a 
                        responsive page . The design is from devchallenge.io. 
                        Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </div>
                    </div>
                </div>
                <div className={styles.projectsMain}>
                    <div className={styles.projectsImage}>
                    <Image 
                    className={styles.image}
                    src='/checkout.png'
                    width={300}
                    height={200}
                    alt='pic'
                    />
                    </div>
                    <div className={styles.projectsText}>
                        <div className={styles.projectsTextTitle}>Checkout</div>
                        <div className={styles.projectsTextdesc}>In this project, I work with HTML and CSS to create a responsive page . 
                        The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. 
                        Quisque feugiat malesuada molestie. </div>
                    </div>
                </div>
            </div>
        </>
    )
}
