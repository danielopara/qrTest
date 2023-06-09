const path =  require('path')

module.exports = {
    mode : 'development',
    entry :{
        sql : './src/sql.js',
        sellerScan : './src/sellerScan.js',
        buyerGenerate : './src/buyerGenerate.js',
        sellerGenerate : './src/sellerGenerate.js',
        scanSeller : './src/scanSeller.js'
    },
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename : '[name].bundle.js'
    },
    watch : true
}