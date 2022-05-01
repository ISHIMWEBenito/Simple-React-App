import React from 'react';
import Image from '../images/img6.jpg';

export default function Hero() {
  return (
    <section className='hero'>
      <img src={Image} alt='' className='hero--photo' />
      <h1 className='hero--header'>The Law Of Attraction</h1>
      <p className='hero-text'>
        <p>
          "Commit to the Lord whatever you do, and he will establish your
          plans." Proverbs 16:3{' '}
        </p>
        <p>
          "Whatever the mind can conceive and believe, it can achieve." ~
          Napoleon Hill
        </p>
      </p>
    </section>
  );
}
