const express = require('express')

const mongoose = require('mongoose')

const router = require('./router/router.js')

const PORT = 3000;
const app = express()

app.use(express.json())
app.use("/api", router)
	
async function startApp() {
	try {
		await mongoose.connect('mongodb+srv://dimagordienkog:123@cluster0.krqptta.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology : true, useNewUrlParser: true })
		app.listen(PORT, () => console.log("start server " + PORT))
	} catch (e){
		res.status(500,).json(e)
	} 
}



startApp()