const jwt = require("jsonwebtoken")
function isValidJwt(req,res,next){
    let token = req.header["Authorization"]
    if (typeof token == "undefined" ){
        res.status(403).send("TokenJWT not valid, try to login.")
    }
    jwt.verify(token, 'AlgernonAlgernonAlgernonAlgernon',{ algorithms: ['HS256'] },function(err, decoded) {
        if (err) {
            res.status(403).send(err.message)
        }
      });
    next();
}
module.exports = isValidJwt;