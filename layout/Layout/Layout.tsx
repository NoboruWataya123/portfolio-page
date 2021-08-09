import React, { FunctionComponent } from 'react'
import Hobbies from '../Hobbies/Hobbies'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Layout.module.css'
import { LayoutProps } from './Layout.props'
import ProgressBar from '../ProgressBar/ProgressBar'
import Projects from '../Projects/Projects'
import Blog from '../Blog/Blog'

function Layout({children}:LayoutProps):JSX.Element {
    return (
        <>
            <div className={styles.wrapper}>
                <Header className={styles.header}/>
                <ProgressBar className={styles.progressBar}/>
                <Sidebar className={styles.sidebar}/>
                <Projects className={styles.projects}/>
                <Blog className={styles.blog}/>
                <Hobbies className={styles.hobbies}/>
            </div>
        </>
    )
}

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element{
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}
