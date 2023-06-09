const db = require('./sql.js')
const qr = require('qrcode');

db.getConnection((err, connection) =>{
  if(err){
    console.log("Connection error", err);
    return
  }
  console.log("Connected")
})



const display = document.getElementById('qrDisplay')


// time
const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDay()
  const hrs = date.getHours()
  const mins = date.getMinutes()
  const secs = date.getSeconds()



//for seller
const displayQRCode = document.querySelector('.generateQR')
displayQRCode.addEventListener('submit', (e)=>{
    e.preventDefault();
    const amount = displayQRCode.amount.value;
    const name = displayQRCode.name.value;
    const description = displayQRCode.description.value;
    const time =  year + "/" + month + "/" + day + " " + hrs + ":" + mins + ":" + secs + ":" + date.getMilliseconds()
    const pay = `amount: ${amount}   name: ${name}  description: ${description} time: ${time}`
    

    if (amount === '' && name === '' && description=== '') {
        alert('fill in the requirements');
      } else {
        generateQRCode(pay)
      }  
})




//generate qrcode
const generateQRCode = (text) => {
    qr.toCanvas(display, text, {
        width : 250,
        height: 250
    });
  };

  const showSpinner = () => {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';
  };

  const hideSpinner = () => {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'none';
  };
