import { useState } from "react"

import {Link} from 'react-router-dom'

function Ajouter(props){
 let tache={}
 function HandalClickAjouter(){
 const nomV =document.getElementById("name").value
 const messageV =document.getElementById("message").value
 const etatV = document.getElementById("etat").value
tache={nom:nomV,description:messageV,etat:etatV}

 props.handelClickAfficher(tache)
    
       }
 
  
  return<>
 <div className="container-fluid w-75 mx-auto my-5">
 <h1 className="my-5">FORMULAIRE DE AJOUTER DES TAHCES</h1>
 
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="name" >NAME DE TACHE</label>
          <input  type="text" name="" id="name" className="form-control " />
        
        </div>
        
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="message">DESCRIPTION DES TACHE</label>
          <textarea  name="" id="message" className="form-control" rows="4"    ></textarea>

          
        </div>
<div className="form-group">
  <label htmlFor="">ETAT</label>
  <select className="form-control" name=""  id="etat">
    <option>en faire</option>
    <option>en coure</option>
    <option>en termine</option>
  </select>
</div>
<div className="form-group mb-4">
<Link to="/"><button   onClick={HandalClickAjouter}  className="form-control btn btn-primary">Ajouter</button></Link>

        </div>
       
      

 </div>
    </>
}
export default Ajouter