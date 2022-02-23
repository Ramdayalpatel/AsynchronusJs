//import util pakeage
const util = require('node:util');

async function async_fn() {
    return "Welcome to Turoials Point !!!";
}
const callFunction = util.callbackify(async_fn);

callFunction((err, ret) => {

    if (err) throw err;
    console.log(ret)

});