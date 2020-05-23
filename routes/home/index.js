const router = require("express").Router();
const fs = require("fs");
const { createBundleRenderer } = require("vue-server-renderer");

const bundleRenderer = createBundleRenderer(
  require(global.appRoot + "/dist/vue-ssr-bundle.json"),
  {
    template: fs.readFileSync(
      global.appRoot + "/templates/index.html",
      "utf-8"
    ),
  }
);

router.get("/", (req, res) => {
  bundleRenderer.renderToStream({ url: req.path }).pipe(res);
});

module.exports = router;
