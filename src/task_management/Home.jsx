import React from "react";
import style from "./style.module.css";
import edit from './edit.png'
import dele from './delete.png'
export default function Home() {
  return (
    <div className={`${style.container}`}>
      <h1> Management Tasks</h1>
      <button>Add</button>
      <div className={`row ${style.row}`}>
        <div className={`col ${style.leftCoulon}`}>
          <div className={`${style.statuTitre}`}>en faire</div>
          <div className={`row ${style.tache}`}>
            <p className="col">tache1</p>
            <img  src={edit} className={`col-6 ${style.img}`}/>
            <img  src={dele} className={`col-6 ${style.img}`}/>

            </div>
            <hr />
            <div className={`${style.tache}`}>
            <p>tache1</p>
            </div><hr />
            <div className={`${style.tache}`}>
            <p>tache1</p>
            </div>
        </div>

        <div className={`col ${style.midleCoulon} `}>
          <div className={`${style.statuTitre}`}>en cours</div>
        </div>
        <div className={`col ${style.rightCoulon}`}>
          <div className={`${style.statuTitre}`}>en termine</div>
        </div>
      </div>
    </div>
  );
}
