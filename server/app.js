const express = require("express");
const history = require("connect-history-api-fallback");
const app = express();

const staticFileMiddleware = express.static("dist");
app.use(staticFileMiddleware);
// Support history api
app.use(
  history({
    index: "/dist/index.html",
    verbose:true
  })
);
// 2nd call for redirected requests
app.use(staticFileMiddleware);

app.listen(5000, function () {
  console.log("Example app listening on port 3000!");
});
