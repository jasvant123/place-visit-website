import React from 'react'
const Navbar = ({ filterItem,visitList}) => {
  return (
    <>
     <nav className="navbar">
        <div className="btn-group">
            {
                visitList.map((curElem)=>{
                    return(
                        <button className="btn-group__item" onClick={()=>filterItem(curElem)}>{curElem}</button>
                    );
                })
            }
        </div>
    </nav>
    </>
  )
}

export default Navbar