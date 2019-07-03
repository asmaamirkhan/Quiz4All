/*
 @author: Asmaa ~ 2019 
*/

const modules = require('./common_modules');

function verifyAuth(req, res, next) {
    if (req.path != '/access') {
        modules.jwt.verify(req.headers.token, 'QUIZ4ALL2019', function (err, decoded) {
            if (err)
                return res.json(modules.error_func('Authentication error', 515, req.body));
                console.log(decoded)
            req.body.decoded_id = decoded.id;
            if (req.path == '/verify')
                return res.json(modules.success_func('Authenticated'));
            next();
        });
    } else next();
}


module.exports = verifyAuth;