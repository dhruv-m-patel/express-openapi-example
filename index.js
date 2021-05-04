const express = require("express");
const openapi = require("express-openapi");
const compression = require("compression");
const cors = require("cors");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const yaml = require("js-yaml");
const operations = require("./routes");

const app = new express();
app.use(express.json());
app.use(compression());
app.use(cors());

openapi.initialize({
    app,
    apiDoc: path.resolve(__dirname, "./api-doc.yml"),
    paths: path.resolve(__dirname, "routes"),
    operations,
});

app.listen(3010, (err) => {
    if (err) {
        console.log(`ERROR: ${err.message}`, err.stack);
    } else {
        console.log("API is running at http://localhost:3010");
    }
});

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(
        yaml.load(
            fs.readFileSync(path.resolve(__dirname, "./api-doc.yml"), "utf8")
        ),
        {
            swaggerOptions: {
                url: "http://localhost:3010/docs",
            },
        }
    )
);
