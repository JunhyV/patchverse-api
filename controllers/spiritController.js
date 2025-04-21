const Spirit = require("../models/Spirit");

exports.newSpirit = async (req, res) => {
  // Create new spirit
  const spiritModel = new Spirit(req.body);

  try {
    // Add spirit to the database
    await spiritModel.save();

    // Send response
    res.json({
      msj: "NUEVO Espiritu agregado de forma exitosa",
      data: req.body,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getSpirits = async (req, res, next) => {
  try {
    // Get spirits from database
    const spirits = await Spirit.find({});
    res.json(spirits);

  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showSpirit = async (req, res, next) => {
  // ID valiadation
  const id = req.params.idSpirit;

  if (id.length === 24) {
    const spiritById = await Spirit.findById(id);

    if (!spiritById) {
      res.json({
        msj: 'El Shaman o el ID es incorrecto.'
      })
      next();
    }
    
    // Show Spirit
    res.json(spiritById);

  } else{
    res.json({
      msj: 'El ID es incorrecto.'
    })
    next();
  }
}

exports.updateSpirit = async(req, res, next) => {
// ID validation
  const id = req.params.idSpirit;

  if (id.length === 24) {
    // Check if that spirit is on DB
    const spiritById = await Spirit.findById(id);

    if (!spiritById) {
      res.json({
        msj: "El Espíritus no se ha encontrado",
      });
      next();
      
    } else {
      const updatedSpirit = await Spirit.findOneAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );

      //Object updated
      res.json({
        msj: "Informacion del spirit actualizada",
        update: updatedSpirit,
      });
    }
  } else {
    res.json({
      msj: "El ID es incorrecto",
    });
    next();
  }
}

exports.deleteSpirit = async (req, res, next) => {
  // ID validation
  const id = req.params.idSpirit;

  if (id.length === 24) {
    // Check if that spirit is on DB
    const spiritById = await Spirit.findById(id);

    if (!spiritById) {
      res.json({
        msj: "El Espiritu no se ha encontrado",
      });
      next();
    } else {
      try {
        await Spirit.findOneAndDelete({ _id: id });
        res.json({
          msj: "Informacion del Espiritu eliminada",
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