const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) =>{
      //middleware (connects to repsonse and request)
      console.log(`Request from: ${req.originalURL}`)
      console.log(`Request type: ${req.method}`)
      next();
    }, (req, res, next) => {
      res.send('GET request successful');
    });
    app.route('/contact').post((req, res) =>
      res.send('POST request successful'));

    app.route('/contact/:contactId')
      .put((req, res) =>
        res.send('PUT request successful'))
      .delete((req, res) =>
        res.send('DELETE request successful'));
}

export default routes;
