import '../components/PricingCardStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
        <div className='card'>
          <h3>- Basic -</h3>
          <span className='bar'></span>
          <p className='btc'>₹ 8000</p>
          <p>- 3 days -</p>
          <p>- 1 page -</p>
          <p>- Featured -</p>
          <p>- Responsive design -</p>
          <Link to='/contact' className='btn'>
            {' '}
            PURCHASE NOW
          </Link>
        </div>

        <div className='card'>
          <h3>- Premium -</h3>
          <span className='bar'></span>
          <p className='btc'>₹ 12000</p>
          <p>- 10 days -</p>
          <p>- 5 pages -</p>
          <p>- Featured -</p>
          <p>- Responsive design -</p>
          <Link to='/contact' className='btn'>
            {' '}
            PURCHASE NOW
          </Link>
        </div>

        <div className='card'>
          <h3>- Business -</h3>
          <span className='bar'></span>
          <p className='btc'>₹ 15000</p>
          <p>- 15 days -</p>
          <p>- 8 pages -</p>
          <p>- Featured -</p>
          <p>- Responsive design -</p>
          <Link to='/contact' className='btn'>
            {' '}
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
