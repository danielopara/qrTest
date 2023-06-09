const mysql = require('mysql')

const con = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '5991',
    database : 'offlinePay'
});

con.getConnection((err)=>{
    if(err){
        throw err;
    }
    console.log('Mysql Connected')
})




const accept = document.querySelector('.accept')
const accept1 = document.getElementById('accept')
const result = document.getElementById('result')

function onScanSuccess(qrCodeMessage) {
    document.getElementById('result').innerHTML = qrCodeMessage;
    const amount = qrCodeMessage.split(" ")
    accept1.innerHTML = "Accept " + amount[3] + "?";
    console.log(amount[3]);
}
function onScanError(errorMessage) {
  //handle scan error
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 60, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);

accept.addEventListener('click', ()=>{
    const amount = accept1.textContent
    const mainAmount = amount.split(" ")

    con.getConnection(function(err,connection){
        if(err){
            throw err;
        }
        connection.beginTransaction(function(err){
            if(err){
                throw err;
            }

            connection.query('UPDATE transfer SET receiver = receiver + 10 WHERE id = 1', function(err, results){
                if (err){
                    return connection.rollback(function(){
                        throw err;
                    })
                }
            })
            console.log('Transaction successfully completed.');
            connection.release();
        })
    })

})