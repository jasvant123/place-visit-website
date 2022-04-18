import React from 'react'
const Menucard = ({myData}) => {
  return (
    <>
     <section className="main_card__container">
         {myData.map((curElem)=>{
             const{id,catogary,name,image,discription}=curElem
            return(
            <>
                <div className="card_container">
                  <div className="card">
                      <div className="card_body">
                      <span className="card_id card-circle subtle">{id}</span><br/>
                      <span className="card_outhar subtle">{catogary}</span>
                      <h1 className="card_tittle">{name}</h1>
                      <span className="card_description subtle ">
                        {discription}
                      </span>
                      <div className="card_read">Read</div>
                      <img src={image} alt="images" className='card_media' />
                      <span className="card_order">Visit here</span>
                      </div>
                  </div>
              </div>
            </>
            );
         })}
     </section>
    </>
  );
};

export default Menucard