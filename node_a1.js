const fs = require("fs")
const path = require("path")

const folderPath = "space_project"
const filePath = path.join(folderPath, "log.txt")
const newFilePath = path.join(folderPath, "update.txt")

// 1.
// fs.mkdirSync(folderPath); // Synchronous
// console.log("Folder 'space_project' created synchronously")
// fs.mkdir(folderPath, (err) => { // Asynchronous
//     if (!err || (err && err.code === "EEXIST")) {
//         console.log("Folder 'space_project' created asynchronously")
//     } else {
//         throw err
//     }
// }); 

2. 
// fs.writeFileSync(filePath, "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft."); // Synchronous
// console.log("File 'log.txt' created synchronously with initial content")

// fs.writeFile(filePath, "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.", (err) => { // Asynchronous
//     if (err) throw err
//     console.log("File 'log.txt' created asynchronously with initial content")
// })

// 3.
// fs.writeFileSync(filePath, "ISRO has started working on Gaganyaan."); // Synchronous
// console.log("File 'log.txt' updated synchronously")

// fs.writeFile(filePath, "ISRO has started working on Gaganyaan.", (err) => { // Asynchronous
//     if (err) throw err
//     console.log("File 'log.txt' updated asynchronously")
// }) 

4.
// fs.appendFileSync(filePath, " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission."); // Synchronous
// console.log("Content appended synchronously to 'log.txt'")

// fs.appendFile(filePath, " The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.", (err) => { // Asynchronous
//     if (err) throw err
//     console.log("Content appended asynchronously to 'log.txt'")
// })

5.
// fs.renameSync(filePath, newFilePath); // Synchronous
// console.log("File renamed synchronously to 'update.txt'")

// fs.rename(filePath, newFilePath, (err) => { // Asynchronous
//     if (err) throw err
//     console.log("File renamed asynchronously to 'update.txt'")
// })

6.
// let data = fs.readFileSync(newFilePath, "utf8"); // Synchronous
// console.log("Content of 'update.txt' (synchronously):", data)
// console.log("We are excited (synchronous)")

// fs.readFile(newFilePath, "utf8", (err, data) => { // Asynchronous
//     if (err) throw err
//     console.log("Content of 'update.txt' (asynchronously):", data)
//     console.log("We are excited (asynchronous)")
// })

7.
// fs.unlinkSync(newFilePath); // Synchronous
// console.log("File 'update.txt' deleted synchronously")

// fs.unlink(newFilePath, (err) => { // Asynchronous
//     if (err) throw err;
//     console.log("File 'update.txt' deleted asynchronously");
// });

8.
// fs.rmdirSync(folderPath); // Synchronous
// console.log("Folder 'space_project' deleted synchronously")

fs.rmdir(folderPath, (err) => { // Asynchronous
    if (err) throw err
    console.log("Folder 'space_project' deleted asynchronously")
}) 