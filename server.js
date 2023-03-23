const express = require ('express');
const app = express ();

app.get(`/greeting/:name`, (req, res) =>{
    const name = req.params.name
    res.send(`Hello, stranger ` + name)
})

app.get(`/tip/:total/:tipPercentage`, (req, res) =>{
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    res.send(`Your tip is $` + total * (tipPercentage * .01))
})

const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
app.get(`/magic/:question`, (req, res) => {
    let randomResponse = Math.floor(Math.random() * response.length)
    res.send(`${req.params.question}? <h1>${response[randomResponse]}</h1>`)
})

app.get(`/`, (req, res) =>{
    res.send(`99 Bottles of beer on the wall <a href= "/98"> take one down, pass it around</a>`)
})

app.get(`/0`, (req,res) => {
    res.send(`0 Bottles of beer on the wall <a href= "/"> take one down, pass it around</a>`)
})

app.get(`/:number_of_bottles`, (req,res) => {
    res.send(`${req.params.number_of_bottles} Bottles of beer on the wall <a href= "/${req.params.number_of_bottles -1}"> take one down, pass it around</a>`)
})

app.listen(4000, () => {
    console.log("Listening on port 4000")
})