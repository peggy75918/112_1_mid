import { HomeFilled, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'

export default function Navbar( {school} ) {
    return (
        <div>
            <nav className={styles.port_nav_base}>
                <div className={styles.container}>
                    <Link to='/'>
                        <div className={styles.port_home_btn}>
                            < HomeFilled className={styles.port_home_icon}/>{ school=='ntue'? 'ntuedtd' : 'ntutixd' }
                        </div>
                    </Link>
                    <div className={styles.container2}>
                        <div className={styles.port_search_base}>
                            <div></div>
                            <SearchOutlined className={styles.port_search_icon} />
                        </div>

                        <div className={styles.port_school_base}>
                            <Link to='/ntue'>
                                <div className={styles.port_school_btn}>
                                    <img className={styles.port_school_icon} src={school=='ntue'? '../src/assets/images/Radiobtn_NTUE_Active.png' : '../src/assets/images/Radiobtn_NTUE_Default.png'} />
                                    <p className={styles.port_school_text}>NTUE</p>
                                </div>
                            </Link>
                            <Link to='/ntut'>
                                <div className={styles.port_school_btn}>
                                    <img className={styles.port_school_icon} src={school=='ntut'? '../src/assets/images/Radiobtn_NTUT_Active.png' : '../src/assets/images/Radiobtn_NTUT_Default.png'}/>
                                    <p className={styles.port_school_text}>NTUT</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </div>
    );
}