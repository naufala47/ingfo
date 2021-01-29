const express = require(`express`);
const app = express();
//"start": "nodemon index.js" untuk memulai start saat npm start
//nodemon untuk monitoring
//router untuk bikin virtual tag bayangan
const router = express.Router();
const cors = require('cors')
const data = require('./model/Model');

app.use(cors())

router.get("/quiz", (req, res, next) => {

    console.log(req.query.type);
    console.log(data);
    switch (req.query.type) {

        case "bebas":
            res.json(data.data[0].data)
            break

        case "hitungan":
            res.json(data.data[1].data)
            break

        default:
            res.json(data.data)
            break;
    }


    next()

})

app.use("/", router);

app.listen(6969);