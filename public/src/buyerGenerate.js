const qr = require('qrcode');
const display = document.getElementById('qrDisplay')

const result = document.getElementById('result');
  //scanning qr codes
   function onScanSuccess(qrCodeMessage){
    document.getElementById('result').innerHTML = qrCodeMessage;

    const pay = qrCodeMessage.split(" ")

    document.getElementById('payFor').innerHTML = "Pay " + pay[1] + " ?"
    console.log(pay[1])
  }

  //creating qrCode on the page
  const buyerQRCode = document.querySelector('.buyerQR')
    buyerQRCode.addEventListener('submit', (e)=>{
      e.preventDefault();
      const payment = result.textContent;
      const mainPayment = payment.split(" ")
      const password = buyerQRCode.password.value;
      console.log(mainPayment[1])
      const text = "transfer is done " + mainPayment[1]
      if(password === ''){
          alert('password required')
      } else {
          generateQRCode(text)
      }
    } )
    
// code for qrcode 
const generateQRCode = (text) => {
  qr.toCanvas(display, text, {
      width : 250,
      height: 250
  });
};

function onScanError(errorMessage) {
  console.log(errorMessage)
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 60, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);