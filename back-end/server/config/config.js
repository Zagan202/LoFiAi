// Set port to run the server on

var env = process.env.NODE_ENV || "development";

if (env === "development") {
  process.env.PORT = 4200;
} else if (env === "test") {
  process.env.PORT = 4200;
}