const express = require("express");
const app = new express;

app.use(express.json());

const customers = [
    {id: 1, name: "Jumadi"},
    {id: 2, name: "Juminten"},
    {id: 3, name: "Jumirah"},
    {id: 4, name: "Jumargo"},
    {id: 5, name: "Jum"},
];

function displayMessage(message) {
    let body = "<html style='height:100%;display:table;margin:auto'>";
        body += "<body style='background: rgba(76,76,76,1); display: table-cell; vertical-align: middle; hegiht:100%;'>";
            body += `<h1 style='font-family: arial; color: #ececec; text-align:center'>${message}</h1>`;
        body += "</body>";
    body += "<html>";

    return body
}

app.get('/', function(req, res){
    res.send(displayMessage("Yuck Fou"));
});

app.get('/api/customer', function(req, res) {
    res.send(customers);
});

app.get('/api/customer/:id', function(req, res) {
    let single_customer = customers.find(cust => cust.id === parseInt(req.params.id));
    if (!single_customer) {
        // 404 bad req
        res.status(404).send(displayMessage("404 <br/> The customer you're looking for is not found. So, get the fuck out of here!!!"));
    }

    res.send(single_customer);
});

app.post('/api/customer', function(req, res) {
    if (!req.body.name || req.body.name.length < 3) {
        res.status(404).send(displayMessage("Name is required and should be minimum 3 character, obey the rules sunapabic"));
    }

    // add new data
    let new_id = customers.length + 1;
    let customer = {
        id: new_id,
        name: req.body.name
    };
    customers.push(customer);
    
    // let single_customer = customers.find(cust => cust.id === parseInt(new_id));
    // if (!single_customer) res.status(500).send(displayMessage("500 <br/> The customer you're saved has failed. It's your fault Mutafaka!!!"));
    
    res.send(customers);
});

app.delete('/api/customer/:id', function(req, res){

});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Port lu kepake bege, yg ${port}`));
