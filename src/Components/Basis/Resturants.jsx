import React, { useState } from 'react'
import "./Style.css";
import menu from './ManuApi';
import Menucard from '../Menucard';
import Navbar from './Navbar';

const uniqList =[
  ...new Set(menu.map((curElem)=>{
    return curElem.category;
  })
  ),
  "All"
];

const Resturants = () => {
  const[menuData,setmenuData]=useState(menu);
  const[visitList,visistList]=useState(uniqList)

  const filterItem =(category)=>{
    if(category==="All"){
      setmenuData(menu);
      return};
      const updateList = menu.filter((curElem)=>{
        return curElem.category== category;
      });
      setmenuData(updateList);
    };

  return (
    <>
    <Navbar filterItem={filterItem} visitList={visitList}/>   
   <Menucard myData={menuData}/>;
    </>
    
    )
}
export default Resturants
