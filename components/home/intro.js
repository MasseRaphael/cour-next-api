import styles from "../../styles/Intro.module.css" ;
import Button from "../common/button";
import ImageIntro from "./imageIntro";

export default function Intro() {
    const style = {
        backgroundcolor: "#ffdf43",
        color: "#212529"
    }
    return(
        <div className={styles.intro}>
            <div className={styles.imageIntro}>
                <ImageIntro />
            </div>
            <div>
                <Button link={"/discover"} styles={style} linkText={"Découvrir"}/>
            </div>
        </div>
    )
}