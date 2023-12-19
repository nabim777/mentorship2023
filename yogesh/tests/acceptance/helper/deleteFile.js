const axios = require('axios')

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

const filesToDelete = []

async function deleteFile(filename) {
    try {
        const res = await axios.delete(`http://localhost:8080/api/resources/${filename}`, {
            headers: {
                "X-Auth": await getXauthToken()
            }
        })
        if (res.status == 200) {
            //remove the deleted file from filesToDelete array
            const fileIndex = filesToDelete.findIndex((file) => file == filename);
            filesToDelete.splice(fileIndex, 1)
        }
    } catch (error) {
        console.error("Error:", error);
    }

}

async function cleanUpTempFiles() {
    for (let i = 0; i < filesToDelete.length; i++) {
        await deleteFile(filesToDelete[i])
    }
}
function swapFileOnRename(oldfileName, newfileName) {
    const fileToSwapIndex = filesToDelete.findIndex((file) => file == oldfileName);
    filesToDelete[fileToSwapIndex] = newfileName;
}

module.exports ={
    deleteFile,
    cleanUpTempFiles,
    filesToDelete,
    swapFileOnRename
}