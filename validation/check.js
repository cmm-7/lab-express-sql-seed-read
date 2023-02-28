const checkNameAndArtist = (req, res, next) => {
    if (!req.body.name) {
        res.status(400).json({ error: "Name is required" });
    } 
    else if(!req.body.artist){
        res.status(400).json({ error: "Artist is required" });
    }
    else if (typeof req.body.is_favorite !== "boolean" ){
        res.status(400).json({ error: "Please provide \"true\" or \"false\""})
    }
    else {
      next();
    }
  };


module.exports = {checkNameAndArtist}