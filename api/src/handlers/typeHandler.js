const getAllType= require("../controllers/typeControllers")


const getAllTypesHandler = async (req,res) => {
  try {
    const response =await getAllType()
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json({Error: error.message});
  }
}

module.exports = {
    getAllTypesHandler
}