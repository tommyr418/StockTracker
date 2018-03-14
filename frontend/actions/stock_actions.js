import * as StockAPIUtil from '../util/stock_api_util';

export const RECEIVE_BLOCK_QUOTES = 'RECEIVE_BLOCK_QUOTES';

export const receiveBlockQuotes = data => (
  {
    type: RECEIVE_BLOCK_QUOTES,
    data,
  }
);

export const requestBatchQuotes = () => dispatch => (
  StockAPIUtil.requestBatchQuotes().then(
    (data) => dispatch(receiveBlockQuotes(data))
  )
);
