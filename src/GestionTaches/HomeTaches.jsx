import { Routes, Route } from "react-router-dom";

import { useState } from "react";
import Ajouter from "./FormulaireAjouter";
import Modify from "./ModifyTache";
import Taches from "./LIstTaches";
export default function HomeTaches() {
  const [allTask, setAllTask] = useState([]);
  const [keys, setKeys] = useState();

  const AfficherList = () => {};
  const ModifyList = (itemk) => {
    setKeys(itemk.key);
  };
  const AjouterTache = (value) => {
    setAllTask((prevState) => {
      return [...prevState, value];
    });
  };
  const ModifierTache = (value) => {
    const myNextList = [...allTask];
    const artwork = myNextList.find((a, i) => i === keys);
    artwork.nom = value.nom;
    artwork.description = value.description;
    artwork.etat = value.etat;

    setAllTask(myNextList);
  };
  const ChangeEtat = (value) => {
    console.log(value.key.key);
    const myNextList = [...allTask];
    const artwork = myNextList.find((a, i) => i === value.key.key);
    console.log(myNextList);
    artwork.etat = value.vEtat;
    setAllTask(myNextList);
  };
  const suprTache = (key) => {
    setAllTask([
      ...allTask.slice(0, key),
      ...allTask.slice(key + 1, allTask.length),
    ]);
  };

  return (
    <div >
      <Routes>
        <Route
          path="/"
          element={
            <Taches
              ChangeEtat={(value) => ChangeEtat(value)}
              handelClick={AfficherList}
              task={allTask}
              modifyListClick={(value) => ModifyList(value)}
              suprItem={(key) => {
                suprTache(key);
              }}
            />
          }
        />

        <Route
          path="/Modify"
          element={
            <Modify
              keys={keys}
              handelClickModifier={(value) => {
                ModifierTache(value);
              }}
              task={allTask}
            />
          }
        />

        <Route
          path="/Ajouter"
          element={
            <Ajouter
              handelClickAfficher={(value) => {
                AjouterTache(value);
              }}
            />
          }
        />
      </Routes>
    </div>
  );
}
