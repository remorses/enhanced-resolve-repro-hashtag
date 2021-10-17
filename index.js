const enhancedResolve = require('enhanced-resolve')
const path = require('path')

const resolve = enhancedResolve.create.sync({
    
})

const CWD = process.cwd()
const res = resolve(CWD, path.join('package/src/#file'))

console.log(JSON.stringify(res))
console.log('Has null character:', res.includes('\0'))
