import { useState } from "react"

import {Link} from 'react-router-dom'
export default function Tache(props){
const [list,setLists]=useState([])

    const [selectV,setSelectV]=useState("all tache")
    const removeTache=({key})=>{
       
props.suprItem(key)
    }
const selectAll =(e)=>{
   setSelectV(e.target.value)
   setLists(props.task.filter((value)=>{console.log("d"); return  value.etat==e.target.value}))
 
}

const ChangeEtate=(Event,k)=>{
    props.ChangeEtat({vEtat:Event.target.value,key:k})
}
 



    return<>

<div className="form-group">
  <label htmlFor="">ETAT</label>
  <select onChange={selectAll} className="form-control" name="" defaultValue={"all tache"}  id="etat"  >
  <option value="all tache" selected >all tache</option>
    
    <option value="en faire">en faire</option>
    <option value="en coure">en coure</option>
    <option value="en termine">en termine</option>
  </select>
</div>

    
 <Link to="/ajouter"><button onClick={props.handelClick} > Ajouter</button></Link>
 <table className="table">
    <thead>
        
    <tr>
            <th>numero</th>
            <th>taches</th>
            <th> description</th>
            <th> etat</th>
            <th> action </th>
        </tr>
        
        
        
{
selectV=="all tache"?
props.task.map((item,key)=>{return<tr>
<td>{key}</td>
<td>{item.nom}</td>
<td>{item.description}</td>
<td>{item.etat}</td>
                    <td><Link to="/Modify"><button onClick={()=>props.modifyListClick({key})}>modi</button></Link>
                    <button onClick={()=>removeTache({key})}>annuler</button>
                    <select  onChange={(e)=>ChangeEtate(e,{key})} className="form-control" name="" >
    <option value="en faire">en faire</option>
    <option value="en coure">en coure</option>
    <option value="en termine">en termine</option>
  </select>
                    </td>
                </tr>

}
    ):list.map((item,key)=>{return<tr>
        <td>{key}</td>
        <td>{item.nom}</td>
        <td>{item.description}</td>
        <td>{item.etat}</td>
        <td><button onClick={()=>props.modifyListClick({key})}>modi</button>
         <button onClick={()=>removeTache({key})}>annuler</button>
       <select  onChange={(e)=>ChangeEtate(e,{key})} className="form-control" name="" >
    <option  value="en faire">en faire</option>
    <option value="en coure">en coure</option>
    <option value="en termine">en termine</option>
  </select>
             
                            </td>
                        </tr>})
}
                    
                    
                    



    </thead>
    <tbody>
        
            
              
                
        
    </tbody>
 </table> 
    </>
}