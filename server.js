require("dotenv").config();
require("./config/database")
const express = require("express");

const PORT = process.env.PORT;

const app = express();

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute")
const cartRoute = require("./routes/cartRoute")

app.use(express.json());
app.use('/api/v1', userRoute)
app.use('/api/v1', productRoute)
app.use('/api/v1', cartRoute)

const swaggerJsdoc = require("swagger-jsdoc");
const swagger_UI = require("swagger-ui-express")

// const options = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'BASE_URL: https://swagger-app.onrender.com',
//       version: '1.0.0',
//     },
//   },
//   apis: ["./routes/*.js"], // files containing annotations as above
//   components: {securitySchemes: {BearerAuth:{type: "http", scheme: "bearer", bearerFormat: "JWT"}},security: [{BearerAuth: []}]}
// };
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BASE_URL: https://swagger-app.onrender.com',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
           bearerFormat: "JWT"
        }
      }
    }, 
    security: [{ BearerAuth: [] }]
  },
  apis: ["./routes/*.js"] // Ensure this points to the correct path
};

const openapiSpecification = swaggerJsdoc(options);
app.use("/documentation", swagger_UI.serve, swagger_UI.setup(openapiSpecification))



app.listen(PORT, () => {
  console.log(`server is listening to port: ${PORT}`);

})