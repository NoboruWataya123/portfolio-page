import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';


export default function Button({appearance, children, className, ...props}: ButtonProps): JSX.Element {
    switch (appearance) {
        case 'primary':
            return <button className={styles.button_primary} {...props}>{children}</button>
        case 'ghost':
            return <button className={styles.button_ghost} {...props}>{children}</button>      
        default:
            return <></>
    }
}
