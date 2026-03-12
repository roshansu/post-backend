export const middleware = (req, res, next) => {
  try {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Body:", req.body);
    console.log("Time:", new Date().toISOString());
    console.log("----------------------");
    next();
  } catch (err) {
    console.log(err);
  }
};
