const axios = require('axios')

async function getXauthToken() {
    try {

        const res = await axios.post('http://localhost:8080/api/login', {
            username: 'admin',
            password: 'admin'
        })
        return res.data
    } catch (error) {
        console.error("Error requesting acces token:", error);
    }

}

const filesToDelete = []

async function swapFileOnRename(oldFileName, newFileName){
    filesToDelete[filesToDelete.indexOf(oldFileName)] = newFileName
    return
}

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
        console.error("Error deleting file:", error);
    }

}

async function createFile(filename) {
    try {
     const res=  await axios.post(`http://localhost:8080/api/resources/${filename}`,{}, {
            headers: {
                "X-Auth": await getXauthToken()
            },

        });
    } catch (error) {
        console.error("Error creating file:", error);
    }

}

async function cleanUpTempFiles() {
    for (let i = 0; i < filesToDelete.length; i++) {
        await deleteFile(filesToDelete[i])
    }
}

module.exports = {
    deleteFile,
    cleanUpTempFiles,
    filesToDelete,
    createFile,
    swapFileOnRename
}