var Tweet = require("../models/TweetData");

exports.listAllTweets = (req, res) => {
  Tweet.find({}, (err, tweet) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(tweet);
  });
};

exports.createNewTweet = (req, res) => {
  let newTweet = new Tweet(req.body);
  newTweet.save((err, tweet) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(tweet);
  });
};

exports.readTweet= (req, body) => {
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
    res.status(200).json({ message: "Location successfully deleted" });
  });
};