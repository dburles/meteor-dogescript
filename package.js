Package.describe({
  summary: "wow so syntax very doge much future"
});

Package._transitional_registerBuildPlugin({
  name: "compileDogescript",
  use: [],
  sources: [
    'plugin/compile-dogescript.js'
  ],
  npmDependencies: {"dogescript": "2.3.0"}
});
