const {CoinbasePro} = require('coinbase-pro-node');

console.log("$$let's print money$$");

const apiURI = 'https://api.pro.coinbase.com';
const sandboxURI = 'https://api-public.sandbox.pro.coinbase.com';

const myCallback = (err, response, data) => {
    if (err) {
        console.log(err);
      } else {
        console.log(response);
        console.log(data);
      }
  };

const auth = {
    apiKey: process.env.PROD ? process.env.PROD_API_KEY : process.env.SANDBOX_API_KEY,
    apiSecret: process.env.PROD ? process.env.PROD_API_SECRET : process.env.SANDBOX_API_SECRET,
    passphrase: process.env.PROD ? process.env.PROD_PASSPHRASE : process.env.SANDBOX_PASSPHRASE,
    // The Sandbox is for testing only and offers a subset of the products/assets:
    // https://docs.pro.coinbase.com/#sandbox
    useSandbox: process.env.SANDBOX ? sandboxURI : apiURI,
};

const authedClient = new CoinbasePro.AuthenticatedClient(auth);

const result = publicClient.getProducts(myCallback);