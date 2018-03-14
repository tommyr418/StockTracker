import React from 'react';

const LOGO_MAP = {
  'MSFT': 'microsoft_logo.jpg',
  'FB': 'facebook_logo.png',
  'AAPL': 'apple_logo.png',
  'GOOGL': 'google_logo.png',
  'AMZN': 'amazon_logo.jpg',
};

const CurrentPrice = ({ quote }) => {
  return (
    <div>
      <img src={`images/${LOGO_MAP[quote['1. symbol']]}`}/>
      <span>{ quote['2. price'] }</span>
    </div>
  );
};

export default CurrentPrice;
