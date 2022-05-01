import React from 'react';

export default function Goal(props) {
  return (
    <div className='card'>
      <img src={props.img} alt='' className='card--image' />
      <div className='card--stats'>
        <img src={props.img_s} alt='' className='card--star' />
        <span>{props.rate}</span>
        <span className='gray'>({props.year}) .</span>
        <span className='gray'>{props.country}</span>
      </div>
      <p>{props.name}</p>
      <p>
        In <span className='bold'>{props.city}</span>
      </p>
    </div>
  );
}
