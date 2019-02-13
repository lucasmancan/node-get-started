const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    
    const token = req.headers.authorization.split(" ")[1];

    console.log("TOKEN API: ", token);
    jwt.verify(token, global.API_KEY, function (err, decoded) {
        console.log("Verification: ", err, decoded)
        if (err) return res.status(401).json({
            success: false,
            message: "Authentication Error...",
            data: null
        });

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
};