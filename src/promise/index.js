const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('✅ TODO OK!!');
    } else {
      reject('❌ DUHAA!!'); 
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));
  
  
  
  
  const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        setTimeout(() => {
          resolve('✅ QUÉ BUENO');
        }, 3000)
      }else {
        const error = new Error(' DUHAA!');
        reject(error);
      }
    })
  }
  
  somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));
    



Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('✅ ARRAY OF RESULTS', response);
  })
  
  .catch(err => {
    console.error(err)
  })