const errorHandler = (err, req, res, next) => {
    // let statusCode = err.statusCode || 500;
    // let message = err.message || "Internal Server Error";
    const { statusCode = 500, message = "Internal Server Error" } = err;
    if (process.env.NODE_ENV === "production" && !err.isOperational) {
      message = "Something went wrong!";
    }
    // if (process.env.NODE_ENV === "development") {
    //   console.log(err.stack);
    // }
    res.status(statusCode).json({
      success: false,
      message,
    });
  };

  const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  };

  
  export {errorHandler, notFound};