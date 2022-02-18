import Carmodel from "../models/carmodel.js";

export const createCar = async (req, res) => {
  const newCar = new Carmodel({
    userId: req.userid,
    name: req.body.name,
    model: req.body.model,
    year: req.body.year,
    type: req.body.type,
    engine: req.body.engine,
    litres: req.body.litres,
    url: req.body.url,
  });
  try {
    const savedCar = await newCar.save();
    res.status(200).send({
      sucess: `The user ${newCar.name} created with sucess ${savedCar.userId}`,
    });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Unable to create new  car" }] });
  }
};

export const modifyCar = async (req, res) => {
  const { carid, name, model, year, type, engine, litres, url } = req.body;

  try {
    Carmodel.findByIdAndUpdate(
      carid,
      {
        name: name,
        model: model,
        year: year,
        type: type,
        engine: engine,
        litres: litres,
        url: url,
      },
      (err, updatedCar) => {
        if (err) {
          console.log(err);
        } else {
          res
            .status(200)
            .send({ sucess: `the user ${updatedCar} updated with sucess` });
        }
      }
    );
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "unable to update the  car" }] });
  }
};

export const deleteCar = async (req, res) => {
  try {
    Carmodel.findByIdAndDelete(req.body.id, (err, deletedCar) => {
      if (err) {
        console.log(err);
      } else {
        res
          .status(200)
          .send({ sucess: `The user ${deletedCar.name} deleted with ` });
      }
    });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Unable to create new  car" }] });
  }
};
export const getCars = async (req, res) => {
  try {
    Carmodel.find({ userId: req.userid }, (err, userCars) => {
      if (err) return new Error(400, "unable to get user cars");
      res.status(200).send({ userCars });
    });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Unable to get    cars" }] });
  }
};
export const getCar = async (req, res) => {
  try {
    Carmodel.findById(req.body.id, (err, userCars) => {
      if (err) return new Error(400, "unable to get user cars");
      res.status(200).send({ userCars });
    });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Unable to get    cars" }] });
  }
};
