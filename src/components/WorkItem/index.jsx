import { EyeFilled, FilePptFilled, GithubFilled, HeartOutlined } from '@ant-design/icons';
import styles from "./workitem.module.css"
import img_404_e from "../../assets/images/img_NTUEphoto_Default@2x.png"
import img_404_t from "../../assets/images/img_NTUTphoto_Default@2x.png"

function WorkItem({ data, school, semester }) {
    const add404Img = (ev) => {
        {school == "ntue" ? ev.target.src = img_404_e : ev.target.src = img_404_t}
      }
   
    return(
        <div className={styles.port_work_base}>
            <div className={styles.port_work_view}><EyeFilled style={{ paddingRight: '4px' }}/>114514</div>
            <a href={data.websiteUrl}>
                <img className={styles.port_work_img} onError={add404Img} src={data.imgUrl}></img>
            </a>
            <div>
                <div className={styles.port_work_info_base}>
                    <div className={styles.port_work_info_left}>
                        <p className={styles.port_work_title}>{data.workName}</p>
                        <p className={styles.port_work_team}>{data.name.join(" ")}</p>
                        <div className={styles.port_work_tags}>
                            {data.skill && data.skill.length > 0
                                ? data.skill.map((ele) =>
                                    ele !== "" ? <span className={styles.port_filter_btn} key={`skill-${ele}`}>{ele}</span> : null
                                    )
                                : null}
                        </div>
                    </div>
                    <div className={styles.port_work_info_right}>
                        <div className={styles.port_work_icons}>
                            <a href={data.pptUrl} href={data.pptUrl} target="_blank"><FilePptFilled style={{ paddingRight: '8px' , color: '#492D85' }} /></a>
                            <a href={data.githubUrl} href={data.pptUrl} target="_blank"><GithubFilled style={{ color: '#492D85' }} /></a>
                        </div>
                        <div className={styles.port_work_hearts}><HeartOutlined style={{ paddingRight: '8px' }}/>114514</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default WorkItem