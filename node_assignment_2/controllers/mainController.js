const Record = require("../models/record");

exports.getRecords = (req, res, next) => {
  Record.find()
    .then((records) => {
      res.status(200).json(records);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

exports.getRecord = (req, res, next) => {
  const recordId = req.params.recordId;

  Record.findById(recordId)
    .then((record) => {
      res.status(200).json(record);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

exports.postRecord = (req, res, next) => {
  const { name, gender, phone, email, category, technology } = req.body;
  const record = new Record({
    name,
    gender,
    phone,
    email,
    category,
    technology,
  });

  record
    .save()
    .then((record) => {
      res.status(201).json(record);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

exports.updateRecord = (req, res, next) => {
  const recordId = req.params.recordId;

  Record.findByIdAndUpdate(recordId, req.body, { new: true })
    .then((record) => {
      res.status(200).json(record);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

exports.deleteRecord = (req, res, next) => {
  const recordId = req.params.recordId;

  Record.findByIdAndDelete(recordId)
    .then((record) => {
      res.status(200).json(record);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};
