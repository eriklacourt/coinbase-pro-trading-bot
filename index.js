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

client.rest.account.listAccounts().then(accounts => {
    const message = `You can trade "${accounts.length}" different pairs.`;
    console.log(message);
});