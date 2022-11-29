const asyncHandler = require('express-async-handler')
// @desc Gets Goals
const getGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Get goals ${req.params.id}`})
})
// @desc Sets Goals
const setGoal =  asyncHandler(async(req,res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Pease add a text field')
    }
    
    res.status(200).json({message: 'Set goal'})
})
// @desc Update Goals
const updateGoal =  asyncHandler(async(req,res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})
// @desc Delete Goals
const deleteGoal =  asyncHandler(async(req,res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}