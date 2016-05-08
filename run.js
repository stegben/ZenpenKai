const prodApp = require('./server/prodServer');
const devApp = require('./server/devServer');
let app = null;

if (process.env.NODE_ENV === 'production') {
  app = prodApp;
} else {
  app = devApp;
}

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), 'localhost', (err) => {
  if (err) { return console.log(err); }
  return console.log('Node app is running on port', app.get('port'));
});
