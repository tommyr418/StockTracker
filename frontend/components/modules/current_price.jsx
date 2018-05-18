import React from 'react';
import { Link } from 'react-router-dom';

const LOGO_MAP = {
  'MSFT': 'microsoft_logo.jpg',
  'FB': 'facebook_logo.png',
  'AAPL': 'apple_logo.png',
  'GOOGL': 'google_logo.png',
  'AMZN': 'amazon_logo.jpg',
};

const COMPANY_MAP = {
  'MSFT': 'Microsoft',
  'FB': 'Facebook',
  'AAPL': 'Apple',
  'GOOGL': 'Google',
  'AMZN': 'Amazon',
};

const CurrentPrice = ({ quote }) => {
  return (
    <Link to={ `/${ COMPANY_MAP[quote['1. symbol']].toLowerCase() }` }>
      <div className='current-price'>
        <img src={`images/${LOGO_MAP[quote['1. symbol']]}`}/>
        <div className='current-price-info'>
          <span> Company: { COMPANY_MAP[quote['1. symbol']] } </span>
          <span> Symbol: { quote['1. symbol'] } </span>
          <span> Price: { quote['2. price'] } USD </span>
          <span> Last Updated: { quote['4. timestamp'] } </span>
        </div>
      </div>
    </Link>
  );
};

export default CurrentPrice;
