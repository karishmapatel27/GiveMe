import React from 'react'

function ItemDetails () {
  return (
    <>
      <div className="itemDetails">
        <h1>Leather Biker Jacket</h1>
        <img className="itemImg"src='./img/city.png'></img>

        <div className="description">
          <p  className='itemInfo'>
            GiveMe is an online platform where kiwis can donate their unwanted items to other kiwis, empowering the NZ community to improve sustainability and reduce the waste caused by unwanted products.
          </p>
          <button className="button primaryBtn">Give Me</button>
          <button className="button primaryBtn">Watch</button>
        </div>
      </div>
    </>
  )
}

export default ItemDetails
