export const requestBatchQuotes = () => (
  $.ajax({
    method: "GET",
    url: "https://www.alphavantage.co/query",
    data: {
      function: 'BATCH_STOCK_QUOTES',
      symbols: 'MSFT,FB,AAPL,GOOGL,AMZN',
      apikey: '0EVY2TNG7FN9V6N4',
    },
  })
);

export const requestDailyPrices = (symbol) => (
  $.ajax({
    method: "GET",
    url: "https://www.alphavantage.co/query",
    data: {
      function: 'TIME_SERIES_DAILY',
      symbol,
      outputsize: 'compact',
      apikey: '0EVY2TNG7FN9V6N4',
    },
  })
);
