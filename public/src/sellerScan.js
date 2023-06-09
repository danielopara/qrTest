const accept = document.getElementById('accept')
const result = document.getElementById('result')

function onScanSuccess(qrCodeMessage) {
    document.getElementById('result').innerHTML = qrCodeMessage;
    const amount = qrCodeMessage.split(" ")
    accept.innerHTML = "Accept " + amount[3] + "?";
    console.log(amount[3]);
}
function onScanError(errorMessage) {
  //handle scan error
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 60, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);
