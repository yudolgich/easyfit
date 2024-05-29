import React from "react";
import Footer from "../../footer/footer";
import cl from "./mainPage.module.css";
import phone from "../../../images/phone.png";
import pad from "../../../images/pad.png";
import laptop from "../../../images/laptop.png";
import desktop from "../../../images/desktop.png"; 
import getLang from "../../../utils/langs";

const MainPage = ({langCode}) => {
    const lang = getLang(langCode)
    return (
        <div className={cl.mainPage}>
            <div className={cl.over}>
                <div className={cl.woman}>
                    <h1>{lang.train}</h1>
                </div>
            </div>
            
            <div className = {cl.splitSection}>
                <div className = {cl.column}>
                    <div className={cl.circle}>
                        <h2 className={cl.caption}>{lang.forGym}</h2>
                    </div>
                    <div className = {cl.columnText}>
                        <h2>{lang.forGymText1}</h2>
                        <h2>{lang.forGymText2}</h2>
                        <h2>{lang.forGymText3}</h2>
                    </div>
                </div>
                <div className = {cl.stick}></div>
                <div className = {cl.column}>
                    <div className={cl.circle}>
                        <h2 className={cl.caption}>{lang.forHome}</h2>
                    </div>
                    <div className = {cl.columnText}>
                        <h2>{lang.forHomeText1}</h2>
                        <h2>{lang.forHomeText2}</h2>
                        <h2>{lang.forHomeText3}</h2>
                    </div>
                </div>
            </div>
            <div className ={cl.rectangle}>
                <div className={cl.startTraining}>
                    <div className = {cl.textInRectangle}>
                        <div>
                        <p>{lang.anyTime}</p>
                        <span>{lang.anyDevices}</span>
                        </div>
                        <div className={cl.icons}>
                            <img src={phone} alt="" />
                            <img src={pad} alt="" />
                            <img src={laptop} alt="" />
                            <img src={desktop} alt="" />
                        </div>
                    </div>
                    <div className ={cl.stickRectangle}></div>
                    <div className ={cl.startTrainingButton}>
                        <p>{lang.startTraining}</p>
                    </div>
                </div>
            </div>
            <Footer langCode={langCode}/>
        </div>
    )
}

export default MainPage;