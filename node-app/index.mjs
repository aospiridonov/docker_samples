import fs from 'fs'

fs.appendFile('my-file.txt', 'File created form Node.js', (error)=>{
    if (error) throw error
    console.log('File saved!')
})

setTimeout(()=> console.log('End'), 30000)