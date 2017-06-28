//example 1 of an async function
navigator.geolocation.getCurrentPosition(position=>{
    console.log(position);//or whatever you want to do with the position
  },
  (msg)=>reject('Please enable your GPS position future.'),
  {enableHighAccuracy: true}
)


//example 1 of a promisified async function
function promisifiedGetCurrPos() {
    // 1 - Create a new Promise
    return new Promise(function (resolve, reject) {
        // 2 - Copy-paste your async code inside this function
        navigator.geolocation.getCurrentPosition(position=>{
            // 3 - in your async function’s callback
            // reject for the errors and resolve for the results
            return resolve(position)
        },
        (msg)=>reject('Please enable your GPS position future.'),
        {enableHighAccuracy: true}
        )
    })
}

//example 2 of an async function
setTimeout(() => {
  console.log('value after 3 seconds')
}, 3000);


//example 2 of a promisified async function
function promisifiedSetTimeout() {
    // 1 - Create a new Promise
    return new Promise(function (resolve, reject) {
        // 2 - Copy-paste your async code inside this function
        setTimeout(() => {
            // 3 - in your async function’s callback
            // reject for the errors and resolve for the results
            return resolve('value after 3 seconds')
        }, 3000);
    })
}

//example 2 of an async function
setTimeout(() => {
  console.log('value after 3 seconds')
}, 3000);


//example 2 of a promisified async function
function promisifiedSetTimeout() {
    // 1 - Create a new Promise
    return new Promise(function (resolve, reject) {
        // 2 - Copy-paste your async code inside this function
        setTimeout(() => {
            // 3 - in your async function’s callback
            // reject for the errors and resolve for the results
            return resolve('value after 3 seconds')
        }, 3000);
    })
}

//example 3 of an async function
fs.readFile(path, function (err, data) {
  if (err) throw err;
  console.log(data);
});

//example 3 of a promisified async function
function promisifiedReadFile(path) {
    // 1 - Create a new Promise
    return new Promise(function (resolve, reject) {
        // 2 - Copy-paste your async code inside this function
        fs.readFile(path, function (err, data) {
          if (err) reject(err);
          resolve(data);
        });
    })
}
