import React from "react";
import cl from "./programsInfo.module.css";
import Footer from "../../footer/footer";

const ProgramsInfo = ({info, langCode}) => {
    let name;
    let shortDescription;
    let description;
    if (langCode == "ru") {name = info.name_ru; shortDescription = info.short_description_ru; description = info.description_ru}
    else if (langCode == "en") {name = info.name_en; shortDescription = info.short_description_en; description = info.description_en}

    return (
        <div className={cl.Page}>
            <div className={cl.Rectangle}>
                <div className={cl.Rectangle_info}>
                    <div className={cl.Picture}>
                        <img src={info.preview} alt="" />
                     </div>
                     <div className={cl.Rectangle__info}>
                         <p1>{name}</p1>
                         <span>{shortDescription}</span>
                    </div>
                </div>
                <div className={cl.Rectangle_Program}>
                    <span>{description}</span>
                    <p2>Тренировка состоит из 1 упражнения, после выполнения каждого нажмите на кнопку “далее”.</p2>
                    <p>Выполнение упражнения</p>
                    <p3>X. Название упражнения</p3>
                    <p4>Тут написано количество повторений</p4>
                    <div className={cl.Picture2}>
                        {/* <img src={} alt="" /> */}
                    </div>
                    <p>Видео выполнения упражнения</p>
                    <div className={cl.Picture3}>
                        {/* <img src={} alt="" /> */}
                    </div>
                    <div className={cl.Picture4}>
                        {/* <img src={} alt="" /> */}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}

export default ProgramsInfo;