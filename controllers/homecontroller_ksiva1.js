exports.respondWithHome = (req, res) => {
    res.render("home");
  };
  
  exports.respondWithImage = (req, res) => {
    let picture = req.params.image;
    res.render(picture);
  };