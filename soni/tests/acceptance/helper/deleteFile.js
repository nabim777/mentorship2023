const axios = require('axios')

const filesToDelete = []

async function getXauthToken() {
    try {

        const res = await axios.post('http://localhost:8080/api/login', {
            username: 'admin',
            password: 'admin'
        })
        return res.data
    } catch (error) {
        console.error("Error:", error);
    }

}

async function deleteFile() {
    
    try {
        const res = await axios.delete(`http://localhost:8080/api/resources/${filesToDelete}`, {
            headers: {
                "X-Auth": await getXauthToken()
            }
        })
    } catch (error) {
        console.error("Error:", error);
    }
}

// async function cleanUpTempFiles() {
//     for (let i = 0; i < filesToDelete.length; i++) {
//         await deleteFile(filesToDelete[i])
//     }
// }

// function swapFileOnRename(oldfileName, newfileName) {
//     const fileToSwapIndex = filesToDelete.findIndex((file) => file == oldfileName);
//     filesToDelete[fileToSwapIndex] = newfileName;
// }

// exports.deleteFile = deleteFile
// // exports.cleanUpTempFiles = cleanUpTempFiles
// exports.filesToDelete = filesToDelete
// exports.swapFileOnRename = swapFileOnRename