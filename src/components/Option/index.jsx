import { Link } from "react-router-dom"
import styles from "./option.module.css"

function Option({ school}) {
    return (
        <div className={styles.options}>
            <Link to={`/${school}/112-1`} className={styles.option_btn}>112-1</Link>
            <Link to={`/${school}/111-2`} className={styles.option_btn}>111-2</Link>
            <Link to={`/${school}/111-1`} className={styles.option_btn}>111-1</Link>
            <Link to={`/${school}/110-2`} className={styles.option_btn}>110-2</Link>
            <Link to={`/${school}/110-1`} className={styles.option_btn}>110-1</Link>
        </div>
    )
}

export  default Option