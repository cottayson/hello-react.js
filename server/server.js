let express = require('express')
let app = express()
let http = require('http').Server(app)
let path = require('path')
const PORT = process.env.PORT || 5000

let client_path = path.join(__dirname, '../dest')

app
    .use(express.static(client_path))
    // .get('/', (req, res) => {
    //     res.sendFile('index.html')
    // })

http.listen(
    PORT, () => console.log(`listen port: ${PORT}`)
)