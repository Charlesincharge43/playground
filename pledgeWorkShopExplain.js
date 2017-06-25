
let promisifiedReadFile ; // require it later ... look at your old practical promises workshop

let promise0 = Promise.resolve('0 resolved value');

let promiseA1 = promise0
                .then('this will just give A1 the same resolved value as 0 because not a function');

let promiseB1 = promiseA1
                .then(promiseA1ResolvedValue => {
                  console.log(promiseA1ResolvedValue);// should be identical to promise0ResolvedValue
                });

let promiseA2 = promise0
                .then(promise0ResolvedValue => {
                  return promise0ResolvedValue + `.. now changed by A2's successhandler function`;
                });

let promiseB2 = promiseA2
                .then(promiseA2ResolvedValue => {
                  console.log(promiseA2ResolvedValue);
                });

let promiseA3 = promise0
                .then(promise0ResolvedValue => {
                  let promiseZ = promisifiedReadFile(promise0ResolvedValue);
                  return promiseZ;
                });

let promiseB3 = promiseA3
                .then(promiseA3ResolvedValue => {
                  console.log(promiseA3ResolvedValue);// should be identical to promiseZ's resolved value
                });

/*
-----
promise0's handlergroups: [
                            { downstreamPromise: <promiseA1>, successCb: 'this will just give A1...'},
                            { downstreamPromise: <promiseA2>, successCb: promiseA2_success_handler },
                            { downstreamPromise: <promiseA3>, successCb: promiseA3_success_handler },
                          ]

promiseA3_success_handler: (val) => {
                                      let promiseZ = promisifiedReadFile(val);
                                      return promiseZ;
                                    }

promiseA1_success_handler: 'this will just give X the same resolved value as A because not a function';
-----

promiseA3's handlergroups: [
                            {downstreamPromise: <promiseB3>, successCb: promiseB3_success_handler }
                          ]

promiseB3_success_handler: (val) => console.log(val);

promiseA1's handlergroups: [
                            {downstreamPromise: <promiseB1>, successCb: promiseB1_success_handler }
                          ]

promiseB1_success_handler: (val) => console.log(val);

When Promise0 is resolved (after A1, A2, A3 are then offed it), the following things happen:
1) All downstream promises' (A1, A2, A3) internal resolve functions are invoked,
    and the promises are fulfilled with Promise0's resolved value
    (i.e., A1._value, A2._value, A3._value = '0 resolved value')
2) Promise X has no success handler, so it kicks off Promise Y internal resolve function
    (with X's value - same as 0's value) passed in (have Promise Y fulfilled with that value)
3)  a. Promise A has success handler, so its success handler is invoked with Promise
        A's value (which is same as Promise 0) passed in.
    b. Since the return value of the success handler is a promise (promise Z!),
        you then off it and THEN kick off Promise B's internal resolve function
        with the resolved value of Promise Z passed in (have Promise B fulfilled with
        Z's value)
4) promiseA3_success_handler is invoked with 0's resolved value

*/
