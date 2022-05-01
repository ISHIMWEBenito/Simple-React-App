import React from 'react';
// import Images from '../images/....png';

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = 'ACHIEVED';
  } else if (props.item.location === 'Online') {
    badgeText = 'WORKING ON IT';
  }

  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={props.item.image} alt='' className='card--image' />
      <div className='card--stats'>
        {/* <img src={Images} alt='' className='card--star' /> */}
        <span>{props.item.rating}</span>
        <span className='gray'>{props.item.reviewCount} .</span>
        <span className='gray'>{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        From <span className='bold'>{props.item.city}</span>
      </p>
    </div>
  );
}
