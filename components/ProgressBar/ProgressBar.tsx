import { ProgressBarProps } from "./ProgressBar.props";
import styles from './ProgressBar.module.css';


export default function ProgresBar({appearance, children, className, ...props}: ProgressBarProps): JSX.Element {
    switch (appearance) {
        case '1':
            return <div className={styles.progresBarline} {...props}>
            <div className={styles.progresBarlinefill1}></div>
        </div>
        case '2':
            return <div className={styles.progresBarline} {...props}>
            <div className={styles.progresBarlinefill2}></div>
        </div>  
        case '3':
            return <div className={styles.progresBarline} {...props}>
            <div className={styles.progresBarlinefill3}></div>
        </div>
        case '4':
            return <div className={styles.progresBarline} {...props}>
            <div className={styles.progresBarlinefill4}></div>
        </div>
        case '5':
            return <div className={styles.progresBarline} {...props}>
            <div className={styles.progresBarlinefill5}></div>
        </div>
        case '6':
            return <div className={styles.progresBarline} {...props}>
            <div className={styles.progresBarlinefill6}></div>
        </div>
        case '7':
            return <div className={styles.progresBarline} {...props}>
            <div className={styles.progresBarlinefill7}></div>
        </div>   
        case '8':
            return <div className={styles.progresBarline} {...props}>
            <div className={styles.progresBarlinefill8}></div>
        </div>
        case '9':
            return <div className={styles.progresBarline} {...props}>
            <div className={styles.progresBarlinefill9}></div>
        </div>
        case '10':
            return <div className={styles.progresBarline} {...props}>
            <div className={styles.progresBarlinefill10}></div>
        </div>
        default:
            return <></>
    }
}
