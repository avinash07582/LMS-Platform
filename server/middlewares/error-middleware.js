// const errorMiddleware =(err,req,res,next)=>{
//     const status = err.status||500;
//     // const message = err.message||"Backend Error";
//     const message = typeof err.message === "string" ? err.message : "Backend Error";

//     // const extraDetails = err.extraDetails||"Error from Backend"
//     const extraDetails = typeof err.extraDetails === "string" ? err.extraDetails : "Error from Backend";

//     return res.status(status).json({message,extraDetails})
// }



// module.exports = errorMiddleware
const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Backend Error";
    const extraDetails = err.extraDetails || "Error from the Backend";
  
    console.error(
      `[${req.method}]  ${req.path} >> StatusCode:: ${status} `
    );
  
    return res.status(status).json({ message, extraDetails });
  };
  
  module.exports = errorMiddleware;