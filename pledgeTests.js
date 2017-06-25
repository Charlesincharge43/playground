//see everything after line 107

const $Promise = function(executor){
  this._state = 'pending';
  this._handlerGroups = [];
  this._value;

  this._internalResolve = this._internalResolve.bind(this);
  this._internalReject = this._internalReject.bind(this);

  if (typeof executor === 'function') executor(this._internalResolve, this._internalReject);
  else throw new TypeError('executor is not a function');
};

$Promise.prototype._internalResolve = function(val){
  if (this._state === 'pending'){
    this._state = 'fulfilled';
    this._value = val;
    this._callHandlers();
  }
};

$Promise.prototype._internalReject = function(err){
  if (this._state === 'pending'){
    this._state = 'rejected';
    this._value = err;
    this._callHandlers();
  }
};

$Promise.prototype._callHandlers = function(){
  //YOU CAN REFACTOR THIS BECAUSE THERE IS ONLY ONE THING DIFFERENT BETWEEN REJECT AND FULFILLED!!!
  this._handlerGroups.forEach(handlerObj => {
    if (handlerObj.successCb && this._state === 'fulfilled'){
      try {
        let newVal = handlerObj.successCb(this._value);
        if (newVal instanceof $Promise){
          newVal.then(
            (data => {
              handlerObj.downstreamPromise._internalResolve(data);
            }),
            (data => {
              handlerObj.downstreamPromise._internalReject(data);
            })
          );
        }
        else handlerObj.downstreamPromise._internalResolve(newVal);
      }
      catch (err) {
        handlerObj.downstreamPromise._internalReject(err);
      }
    }
    else if (handlerObj.errorCb && this._state === 'rejected'){
      try {
        let newVal = handlerObj.errorCb(this._value);
        if (newVal instanceof $Promise){
          newVal.then(
            (data => {
              handlerObj.downstreamPromise._internalResolve(data);
            }),
            (data => {
              handlerObj.downstreamPromise._internalReject(data);
            })
          );
        }
        else handlerObj.downstreamPromise._internalResolve(newVal);
      }
      catch (err) {
        handlerObj.downstreamPromise._internalReject(err);
      }
    }
    else if (!handlerObj.successCb && this._state === 'fulfilled'){
      handlerObj.downstreamPromise._internalResolve(this._value);
    }
    else if (!handlerObj.errorCb && this._state === 'rejected'){
      handlerObj.downstreamPromise._internalReject(this._value);
    }
  });

  this._handlerGroups = [];
};

$Promise.prototype.then = function(successCb, errorCb){
  let downstreamPromise = new $Promise(() => {});
  let downstreamPromiseObj = {downstreamPromise, successCb, errorCb};
  if (successCb && typeof successCb !== 'function' || errorCb && typeof errorCb !== 'function'){
    this._handlerGroups.push(false);
  }
  else {
    this._handlerGroups.push(downstreamPromiseObj);
  }

  if (this._state === 'fulfilled' && successCb){
    this._callHandlers();
  }
  else if (this._state === 'rejected' && errorCb){
    this._callHandlers();
  }

  return downstreamPromiseObj.downstreamPromise;
};

$Promise.prototype.catch = function(errorCb){
  return this.then(null, errorCb);
};

$Promise.resolve = function(val){
  if (!(val instanceof $Promise)){
    let newExecutor = function(resolve, reject){
      resolve(val);
    };
    let newProm = new $Promise(newExecutor);
    return newProm;
  }
  else {
    return val;
  }
};

let a = Promise.resolve(()=>5);
a
  .then(val => val)
  .then(console.log);

a
  .then()
  .then(console.log);

a
  .then('blah')
  .then(console.log);

let $a = $Promise.resolve(()=>5);
$a
  .then(val => val)
  .then(console.log);

$a
  .then()
  .then(console.log);

$a
.then('blah')
.then(console.log);
