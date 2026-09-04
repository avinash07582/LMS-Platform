
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
  
  
