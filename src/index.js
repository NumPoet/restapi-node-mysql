const express = require('express');
const app = express();

/**SETTINGS */
app.set('port', process.env.PORT || 3000);

/**MIDDLEWAREs */
app.use(express.json());

/**ROUTES */
app.use(require('./routes/employees'));

/**STARTING server */
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
    
});