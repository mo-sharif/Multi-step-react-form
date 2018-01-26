const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('*', (req, res, next) => {
  if (req.get('host').indexOf('localhost') > -1) {
    next();
  } else if (req.get('x-forwarded-proto') != "https") {
    res.set('x-forwarded-proto', 'https');
    res.redirect('https://' + req.get('host') + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
