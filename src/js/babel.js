async function start() {
  return await Promise.resolve('asinc is working');
}

start().then(console.log)