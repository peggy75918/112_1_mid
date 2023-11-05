import { Link } from "react-router-dom"
import { DownCircleFilled, UpCircleFilled } from '@ant-design/icons';
import styles from "./home.module.css"

function Home() {
    return(
        <div>
            <div className={styles.home_text1}>
                <p>國北教大</p>
                <p>北科大</p>
            </div>

            <div className={styles.home_text2}>
                <p>Websites</p>
                <p>Design</p>
                <p>and</p>
                <p>Development</p>
            </div>

            <div className={styles.home_circle_frame}></div>
            <div className={styles.home_circle_center}></div>

            <img src='images/img_schoolphoto.png' className={styles.home_school_photo}/>
            <p className={styles.home_portfolio}>Por<span className={styles.highlight}>tfol</span>io</p>

            <Link to={'/ntue'}>
                <div className={styles.home_btn_top}>
                    <DownCircleFilled className={styles.home_btn_icon_top} style={{ fontSize: '4.5vh'}} /><br/><p className={styles.home_btn_text_top}>NTUE</p>
                </div>
            </Link>
            <Link to={'/ntut'}>
                <div className={styles.home_btn_bottom}>
                    <UpCircleFilled className={styles.home_btn_icon_bottom} style={{ fontSize: '4.5vh'}} /><br/><p className={styles.home_btn_text_bottom}>NTUT</p>
                </div>
            </Link>
        </div>
    )
    
}

export default Home