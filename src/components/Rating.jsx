import React from 'react'

function Rating({ value, text }) {
  return (
    <div>
      <span><i style={{ color: "rgba(255, 215, 0, 1)" }} className={
        value >= 1
          ? "fa-solid fa-star"
          : value >= 0.5
            ? "fa-solid fa-star-half-stroke"
            : "fa-regular fa-star"
      }></i></span>
      <span><i style={{ color: "rgba(255, 215, 0, 1)" }} className={
        value >= 2
          ? "fa-solid fa-star"
          : value >= 1.5
            ? "fa-solid fa-star-half-stroke"
            : "fa-regular fa-star"
      }></i></span>
      <span><i style={{ color: "rgba(255, 215, 0, 1)" }} className={
        value >= 3
          ? "fa-solid fa-star"
          : value >= 2.5
            ? "fa-solid fa-star-half-stroke"
            : "fa-regular fa-star"
      }></i></span>
      <span><i style={{ color: "rgba(255, 215, 0, 1)" }} className={
        value >= 4
          ? "fa-solid fa-star"
          : value >= 3.5
            ? "fa-solid fa-star-half-stroke"
            : "fa-regular fa-star"
      }></i></span>
      <span><i style={{ color: "rgba(255, 215, 0, 1)" }} className={
        value >= 5
          ? "fa-solid fa-star"
          : value >= 4.5
            ? "fa-solid fa-star-half-stroke"
            : "fa-regular fa-star"
      }></i></span><span>  ({value}) ratings </span>
      
      <div>
        <a href="" className='text-info text-decoration-none'>{text}</a>
      </div>
    </div>
  )
}

export default Rating
