const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true) 
      ? setTimeout(() => resolve('     🚀 DO SOMETHING ASYNC'), 4000)
      : reject (new Error('TEST ERROR'))
  });
}

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

console.log('     🟡 BEFORE');
doSomething();
console.log('     🟢 AFTER');


const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  }catch (error) {
    console.error(error)
  }
}


console.log('     🟡 BEFORE 1');
anotherFunction();
console.log('     🟢 AFTER 1');


