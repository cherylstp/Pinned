var Map = require("../models/UniqueMap");

exports.listAllMap = (req, res) => {
    Map.find({}, (err, map) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(map);
  });
};

exports.createNewMap = (req, res) => {
  let newMap = new Map(req.body);
  newMap.save((err, map) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(map);
  });
};

/*exports.readTweet= (req, body) => {
  Tweet.findById(req.params.tweetid, (err, tweet) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(tweet);
  });
};

exports.updateTweet = (req, res) => {
  Tweet.findOneAndUpdate(
    { _id: req.params.tweetid },
    req.body,
    { new: true },
    (err, tweet) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(tweet);
    }
  );
};

exports.deleteTweet = (req, res) => {
  Tweet.remove({ _id: req.params.tweetid }, (err, tweet) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Tweet successfully deleted" });
  }); 
};*/