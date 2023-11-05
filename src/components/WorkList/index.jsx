import { Row, Col } from "antd";

import WorkItem from "../WorkItem"
import styles from "./worklist.module.css"

function WorkList( { works, school , semester } ) {

    return(
        <div className={styles.container}>
            <Row gutter={[32,32]}>
                {works.map((e, idx) => {
                    if(e.workName.length > 0) return (
                        <Col
                            key={`work-${idx}`}
                            sm={{span:24}}
                            md={{span:12}}
                            xl={{span:8}}
                            className={styles.col}
                        >
                            <WorkItem 
                                data={e}
                                key={`work-${idx}`}
                                school={school}
                                semester={semester}
                            />
                        </Col>
                        
                    )
                })}
            </Row>
        </div>
    )
}

export default WorkList