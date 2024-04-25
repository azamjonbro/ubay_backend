export default ({res, status=500, msg="", data=[], error=false}) => {
    res.status(status).json({status, message: msg, data, error})
}