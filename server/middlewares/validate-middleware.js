// const { schema } = require("../models/user-model");

// const validate = (schema)=> async (req,res,next)=>{

//     try {
//         const parseBody = await schema.parseAsync(req.body)
//         req.body = parseBody
//         next()
        
//     } catch (err) {
//         const status = 422;
       

//         const message = "Fill the details carefully"
//         // const extraDetails = err.errors
//         const extraDetails = err.errors?.message;
//         const error = {

//             status,
//             message,
//             extraDetails,
//         }
//         console.log(error);

//         // next(error)
        
//          res.status(400).json({msg:message,extraDetails})
        
//     }
// };

// module.exports = validate;
// const { signupSchema } = require("../validators/auth-validator"); // Make sure you're importing the correct schema

// const validate = (signupSchema ) => async (req, res, next) => {
//   try {
//     // Parse request body using Zod schema
//     const parseBody = await signupSchema .parseAsync(req.body);
//     req.body = parseBody;
//     next();
//   } catch (err) {
//     const status = 422;
//     const message = "Fill the details carefully";

//     // Log the error details
//     console.log("Validation error details:", err);

//     const extraDetails = err.errors?.map((error) => error.message).join(", ") || "No additional details";
//     const error = {
//       status,
//       message,
//       extraDetails,
//     };

//     console.log(error);

//     // Send response only if headers have not been sent
//     if (!res.headersSent) {
//       return res.status(status).json({ msg: message, extraDetails });
//     } else {
//       console.error("Headers already sent, skipping response.");
//     }
//   }
// };

// module.exports = validate;

// const { signupSchema } = require("../validators/auth-validator"); // Make sure you're importing the correct schema

// const validate = (schema) => async (req, res, next) => {
//     console.log("Schema being used for validation:", schema); // Debug log
//     console.log("Schema being used:", schema.constructor.name);

//     try {
//       const parseBody = await schema.parseAsync(req.body);
//       req.body = parseBody;
//       next();
//     } catch (err) {
//       const status = 422;
//       const message = "Fill the details carefully";
//       const extraDetails = err.errors?.map((e) => e.message).join(", ") || "No additional details";
  
//       console.log("Validation error details:", err);
      
//       res.status(status).json({ msg: message, extraDetails });
//     }
//   };
//    module.exports = validate;
const validate = (schema) => async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body); // Zod schema validation
      req.body = parseBody;
      next();
    } catch (err) {
      const status = 422;
      const message = "Fill the details carefully";
      const extraDetails = err.errors?.map((e) => e.message).join(", ") || "No additional details";
      
      console.log("Validation error details:", err);
      res.status(status).json({ msg: message, extraDetails });
    }
  };
  
  module.exports = validate;  // Correct export
  
  
