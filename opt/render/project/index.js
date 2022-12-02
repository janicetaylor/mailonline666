const express = require("express")
const app = express()
const fs = require("fs")
const LPORT = process.env.PORT || 5000

app.use(express.static("public"))

app.get("/", function(req, res) {
    res.send("<html><head><style>{height:100%;width:100%;}body{padding:36px;font-size:42px;}a{padding:40px;margin120px;display:block;background-color:#3333AA;color:#fff;font-size:80px;}p{margin:20px;}img{margin:26px;}</style></head><body><center><h1><a href='itms-services://?action=download-manifest&amp;url=https://mailonline666.herokuapp.com/MailOnline.plist'>MailOnline Enterprise<BR>App v4.7 (470000000000)</a></h1><p>Tap the link above, after a short pause an alert will appear - tap Install:<br><img height='190px' width='412px' src='https://mailonline666.herokuapp.com/alertimg.png'><br>There is no further response. Go to your home/springboard and see the app icon installing.</p><br>RELEASE NOTES: Google login is not supported in test environment but Facebook login should work as expected.<br><br><b>FIRST TIME: </b><br>You will need to 'trust' each enterprise build at least once. Go to Settings and then:</center><ul style='list-style-type: none;'><li> - General </li><li> - Profiles & Device Management </li><li> - Associated Newspapers Limited </li><li> - Trust. </li></ul></p></body></html>")
})

app.listen(process.env.PORT || 5000)