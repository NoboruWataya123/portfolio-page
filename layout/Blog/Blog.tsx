import React from 'react'
import { BlogProps } from './Blog.props'
import styles from './Blog.module.css'
import Image from 'next/image'

export default function Blog({...props}:BlogProps):JSX.Element {
    return (
        <>
            <div {...props} className={styles.blog}>
                <div className={styles.blogTitle}>
                    Blogs
                </div>
                <div className={styles.blogMain}>
                    <div className={styles.blogText}>
                        <div className={styles.blogTextTitle}>How to organize your CSS</div>
                        <div className={styles.blogTextdesc}>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.  

Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</div>
                    </div>
                    <div className={styles.blogImage}>
                    <Image 
                    className={styles.image}
                    src='/blog.jpg'
                    width={500}
                    height={300}
                    alt='pic'
                    />
                    </div>
                </div>
            </div>
        </>
    )
}
