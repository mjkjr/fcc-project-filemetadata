require('dotenv').config()

var express = require('express');
var app = express();

var multer = require( 'multer' );
const upload = multer( { dest: 'uploads/' } );

var cors = require('cors');
app.use(cors());

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/views/index.html');
});

app.post( '/api/fileanalyse', upload.single('upfile'), ( request, response) => {

	response.json( {
		name:request.file.originalname,
		type:request.file.mimetype,
		size:request.file.size
	} );
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('Your app is listening on port ' + port)
});
