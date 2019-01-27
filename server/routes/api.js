const express = require(`express`)
const router = express.Router()
const moment = require(`moment`)


const Expense = require(`../model/Expense`)
const data = require(`../../expenses`)

// SAVES DATA FROM JSON FILE ARRAY TO DB
// data.forEach(d => {
//     let e = new Expense(d)
//     e.save()
// } 
// )

router.get(`/expenses`, function (req, res){
Expense.find({}).sort({date:1}).exec( function (err, expenses) {
    res.send(expenses)
})
})

// let dateFunc = function(){
//     return(data.date ? data.date.moment().format(`LLLL`) :  moment().format(`LLLL`))
// }



router.post(`/new`, function (req, res){
    let data = req.body
    let expense = new Expense({
        item: data.item,
        group: data.group,
        amount: data.amount,
        date: data.date ? moment(data.date).format(`LLLL`) :  moment().format(`LLLL`)
    })
    expense.save()
    res.send(expense)
})


module.exports = router

