import React from 'react'
import "./BottomSectionOne.scss";
import Products from './Products';


// import 'simplebar/dist/simplebar.min.css';

const BottomSectionOne = ({
  products, updateProduct, users, profile, goal
}) => {
  return (

    <div className="Bottom--Left--Container">
      <Products products={products} updateProduct={updateProduct} users={users} profile={profile} goal={goal}/>
    </div>
    
  )
}

export default BottomSectionOne
