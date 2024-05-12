import React from "react";
import Footer from "../../footer/footer";
import cl from "./mainPage.module.css";
import mainPageWoman from "../../../images/mainPageWoman.jpg";
import Navigation from "../../navigation/navigation";

const MainPage = () => {
    return (
        <div className={cl.mainPage}>
            <Navigation/>
            <div className={cl.woman}>
                <img src={mainpageWoman}/>
                <div className ={cl.topLayer}></div>
                <div className = {cl.textOverlay}>
                    <h1>Тренируйтесь с нами</h1>
                </div>
            </div>
        </div>
    )
}

export default MainPage;