'use strict';


function executeQuery(sqlQry, res){
    global.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
};

exports.get =  (req,res, next) => {
    let query = 'select u.first_name, u.last_name, u.birth_date, u.cpf,u.cnpj, p.name as profile '+
     'from users u INNER JOIN profiles p on p.id = u.profile_id';
    
     executeQuery(query, res);
};

exports.post =  (req,res, next) => {
    
    let query = 'SELECT * FROM users';
    executeQuery(query, res)
    res.status(201).send(req.body);
};

exports.put =  (req,res, next) => {
    let query = 'SELECT * FROM users';

    

    executeQuery.request(query, res).then( res =>
        res.status(200).send()
    ).catch(err => console.log(err));
    // res.status(201).send({
    //     id:id,
    //     item: req.body
    // });
};

exports.delete =  (req,res, next) => {

    
    let query = 'SELECT * FROM users';
    executeQuery.request(query, res)

    // const id = req.params.id;
    // res.status(200).send({
    //     id:id,
    //     message: "Excluded."
    // });
};