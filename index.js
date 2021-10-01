const {CoinbasePro} = require('coinbase-pro-node');

console.log("$$let's print money$$");

const auth = {
    apiKey: process.env.PROD ? process.env.PROD_API_KEY : process.env.SANDBOX_API_KEY,
    apiSecret: process.env.PROD ? process.env.PROD_API_SECRET : process.env.SANDBOX_API_SECRET,
    passphrase: process.env.PROD ? process.env.PROD_PASSPHRASE : process.env.SANDBOX_PASSPHRASE,
    // The Sandbox is for testing only and offers a subset of the products/assets:
    // https://docs.pro.coinbase.com/#sandbox
    useSandbox: process.env.SANDBOX,
};

const client = new CoinbasePro(auth);

const channel = {
    name: WebSocketChannelName.USER,
    product_ids: ['BTC-USD'],
  };
  
  client.ws.on(WebSocketEvent.ON_MESSAGE, message => {
    console.info(`Received message of type "${message.type}".`, message);
  });
  
  client.ws.on(WebSocketEvent.ON_MESSAGE_ERROR, errorMessage => {
    throw new Error(`${errorMessage.message}: ${errorMessage.reason}`);
  });
  
  client.ws.on(WebSocketEvent.ON_OPEN, () => {
    client.ws.subscribe(channel);
  });
  
  client.ws.connect();