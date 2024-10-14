const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/UserRoutes')
const productRoutes = require('./routes/productsRoutes')





require('dotenv').config()
require('./helpers/init_mongodb')
const app = express()

app.use(express.json())
app.use(cors(
    {
        origin:'http://localhost:3000'
    }
))

app.use('/user', userRoutes)
app.use('/products', productRoutes)






const port = 5000

app.listen(port, () => {
    console.log(`Ticket  app listening at http://localhost:${port}`)
  })