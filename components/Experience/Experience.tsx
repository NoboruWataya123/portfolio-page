import { ExperienceProps } from "./Experience.props";
import styles from './Experience.module.css';


export default function Experience({children, className, ...props}: ExperienceProps): JSX.Element {
            return( 
            <div className={styles.experience} {...props}>{children}</div>
            )
        }
