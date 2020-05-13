import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import errorhandler from 'errorhandler';
import cors from 'cors';
import routes from './routes';

const isProduction = process.env.NODE_ENV === 'production';

// Create a global app object
const app = express();
const httpServer = http.createServer(app);

app.use(cors());

// application/json type & application/x-www-form-urlencoded post data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (!isProduction) {
  app.use(errorhandler());
}

app.use('/api/v1/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler to print stacktrace
if (!isProduction) {
  app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler - no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

// let's start our server...
const server = httpServer.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${server.address().port}`);
});

export default server;
