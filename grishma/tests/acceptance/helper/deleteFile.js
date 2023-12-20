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
        await axios.delete(`http://localhost:8080/api/resources/${filename}`, {
            headers: {
                "X-Auth": await getXauthToken()
            }
        })
    } catch (error) {
        console.error("Error:", error);
    }
}
export { deleteFile };

// (async function(){
//     await deleteFile("hello.txt");
// })()