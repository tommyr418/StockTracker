import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_BLOCK_QUOTES = 'RECEIVE_BLOCK_QUOTES';
export const RECEIVE_DAILY_PRICES = 'RECEIVE_DAILY_PRICES';

export const receiveBlockQuotes = data => (
  {
    type: RECEIVE_BLOCK_QUOTES,
    data,
  }
);

export const receiveDailyPrices = data => (
  {
    type: RECEIVE_DAILY_PRICES,
    data,
  }
);


export const requestBatchQuotes = () => dispatch => (
  StockAPIUtil.requestBatchQuotes().then(
    (data) => dispatch(receiveBlockQuotes(data))
  )
);

export const requestDailyPrices = (symbol) => dispatch => (
  StockAPIUtil.requestDailyPrices(symbol).then(
    (data) => dispatch(receiveDailyPrices(data))
  )
);
