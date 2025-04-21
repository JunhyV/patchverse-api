const Shaman = require("../models/Shaman");

exports.newShaman = async (req, res, next) => {
  // Create new shaman
  const shamanModel = new Shaman(req.body);

  try {
    // Add shaman to database
    await shamanModel.save();

    // Send response
    res.json({
      msj: "NUEVO Shaman agregado de forma exitosa",
      data: req.body,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getShamans = async (req, res, next) => {
  try {
    // Get shamans from database
    const shamans = await Shaman.find({});
    res.json(shamans);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showShaman = async (req, res, next) => {
  // ID validation
  const id = req.params.idShaman;

  if (id.length === 24) {
    const shamanById = await Shaman.findById(id);

    if (!shamanById) {
      res.json({
        msj: "El Shaman no fue encontrado o su ID es incorrecto.",
      });
      next();
    } else {
      // Show Shaman by ID
      res.json(shamanById);
    }
  } else {
    res.json({
      msj: "El ID es incorrecto",
    });
    next();
  }
  return;
};

exports.updateShaman = async (req, res, next) => {
  // ID validation
  const id = req.params.idShaman;

  if (id.length === 24) {
    // Check if that shaman is on DB
    const shamanById = await Shaman.findById(id);

    if (!shamanById) {
      res.json({
        msj: "El Shaman no se ha encontrado",
      });
      next();
    } else {
      const updatedShaman = await Shaman.findOneAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );

      //Object updated
      res.json({
        msj: "Informacion del shaman actualizada",
        update: updatedShaman,
      });
    }
  } else {
    res.json({
      msj: "El ID es incorrecto",
    });
    next();
  }
};

exports.deleteShaman = async (req, res, next) => {
  // ID validation
  const id = req.params.idShaman;

  if (id.length === 24) {
    // Check if that shaman is on DB
    const shamanById = await Shaman.findById(id);

    if (!shamanById) {
      res.json({
        msj: "El Shaman no se ha encontrado",
      });
      next();
    } else {
      try {
        await Shaman.findOneAndDelete({ _id: id });
        res.json({
          msj: "Informacion del shaman eliminada",
        });
        
      } catch (error) {
        console.log(error);
        next();
      }
    }
  } else {
    res.json({
      msj: "El ID es incorrecto",
    });
    next();
  }
};
