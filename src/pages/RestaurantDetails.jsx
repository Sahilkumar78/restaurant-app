import React from 'react'
import { useParams } from 'react-router-dom';

const RestaurantDetails = () => {

  const {id}=useParams();

  return (
    <div>RestaurantDetails: {id}</div>
  )
}

export default RestaurantDetails