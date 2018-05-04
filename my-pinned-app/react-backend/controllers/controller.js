var Location = require("../models/Location");

exports.listAllLocation = (req, res) => {
  Location.find({}, (err, loc) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(loc);
  });
};

exports.createNewLocation = (req, res) => {
  let newLocation = new Location(req.body);
  newLocation.save((err, loc) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(loc);
  });
};

exports.readLocation= (req, body) => {
  Location.findById(req.params.locid, (err, loc) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(loc);
  });
};

exports.updateLocation = (req, res) => {
  Location.findOneAndUpdate(
    { _id: req.params.locid },
    req.body,
    { new: true },
    (err, loc) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(loc);
    }
  );
};

exports.deleteLocation = (req, res) => {
  Location.remove({ _id: req.params.locid }, (err, loc) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Location successfully deleted" });
  });
};