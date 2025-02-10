// Importamos swagger-jsdoc para generar la documentación
const swaggerJsdoc = require("swagger-jsdoc") 

    const options = {
        definition: {
          openapi: "3.0.3",
          info: {
            title: "Tracks - Express API with Swagger (OpenAPI 3.0)",
            version: "0.1.0",
            description:
              "This is a CRUD API application made with Express and documented with Swagger",
            license: {
              name: "MIT",
              url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
              name: "u-tad",
              url: "https://u-tad.com",
              email: "antonio.villas@live.u-tad.com",
            },
          },
          servers: [
            {
              url: "http://localhost:3000",
            },
          ],
          components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer"
                },
            },
            schemas:{
            },
          },
        },
        apis: ["./routes/*.js"],
      };
      
    module.exports = swaggerJsdoc(options)