import express from 'express'

const app = express()

// middle ware - if i make build(dist) and serve static content, and have made proxy
// problems : changes propagate nahi hote hai 
// app.use(express.static('dist'));



// app.get('/', (req, res) => {
//     res.send("server is ready")
// })



// get a list of 5 jokes 
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'sec joke',
            content: 'This is sec joke'
        },
        {
            id: 3,
            title: 'third joke',
            content: 'This is third joke'
        },
        {
            id: 4,
            title: 'fourth joke',
            content: 'This is fourth joke'
        },
        {
            id: 5,
            title: 'fifth joke',
            content: 'This is fifth joke'
        }
    ]
    res.send(jokes);
})



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});