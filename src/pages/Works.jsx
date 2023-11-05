import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./works.module.css"
import Navbar from "../components/Navbar"
import WorkList from "../components/WorkList"

function Works({ data, school }) {
    const params = useParams();
    const works = data[`${params.categroy}`];
    
    return(
        <div className={styles.container}>
            <Navbar school={school} />
            <WorkList
                works={works}
                school={school}
                semester={params.categroy}
            />
        </div>
    )
}
export default Works