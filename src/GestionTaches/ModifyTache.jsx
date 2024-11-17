import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

export default function Modify(props){
    let tache={}
    function HandalClickModifier(){
        const nomV =document.getElementById("name").value
        const messageV =document.getElementById("message").value
        const etatV = document.getElementById("etat").value
       tache={nom:nomV,description:messageV,etat:etatV}
        props.handelClickModifier(tache)
           
              }

return <>
{
    

<div  className="container-fluid  mx-auto my-5" style={{width:"500px",lineHeight:"40%"}}>
 <h3 className="my-5">FORMULAIRE DE MODIFIER DES TAHCES</h3>
 
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="name" >NAME DE TACHE</label>
          <input  type="text" name="" id="name" className="form-control"  defaultValue={props.task[props.keys].nom}  />
        
        </div>
        
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="message">DESCRIPTION DES TACHE</label>
          <textarea  name="" id="message" className="form-control" rows="4"  defaultValue={props.task[props.keys].description}  ></textarea>

          
        </div>
<div class="form-group">
  <label for="">ETAT</label>
  <select class="form-control" name=""  id="etat" defaultValue={props.task[props.keys].etat} >
    <option>en faire</option>
    <option>en coure</option>
    <option>en termine</option>
  </select>
</div>
<div className="form-group mb-4">
<Link to="/"> <button  onClick={HandalClickModifier}    className="form-control btn btn-primary">Modifier</button></Link>

        </div>
       
      

 </div>

     
}

</>

}