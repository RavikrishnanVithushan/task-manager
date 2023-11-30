const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://ravivithu1997:vithu1119@cluster0.csccl8l.mongodb.net/?retryWrites=true&w=majority';
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

mongoose
	.connect(mongoURI, options)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
