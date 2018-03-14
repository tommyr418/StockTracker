import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_BLOCK_QUOTE = 'RECEIVE_BLOCK_QUOTE';

export const receiveBlockQuote = data => (
  {
    type: RECEIVE_BLOCK_QUOTE,
    data,
  }
);

export const requestBatchQuotes = () => dispatch => (
  StockAPIUtil.requestBatchQuotes().then(
    (data) => dispatch(receiveBlockQuote(data))
  )
);
