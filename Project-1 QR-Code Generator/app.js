var QrImage = require ('qr-image');
var fs = require ('fs');
QrImage.image("http://www.justliveplay.com",{type:'png',size:15})
        .pipe(fs.createWriteStream('GeneratedQRCode.png'));