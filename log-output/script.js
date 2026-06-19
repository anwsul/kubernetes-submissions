const randomString = crypto.randomUUID()

console.log(`${new Date().toISOString()}: ${randomString}`)
setInterval(() => console.log(`${new Date().toISOString()}: ${randomString}`), 5000)
