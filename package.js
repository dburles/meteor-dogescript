Package.describe({
  name: 'dburles:dogescript',
  summary: 'wow so syntax very doge much future',
  version: '1.0.0',
  git: 'https://github.com/dburles/meteor-dogescript.git'
});

Package._transitional_registerBuildPlugin({
  name: "compileDogescript",
  use: [],
  sources: [
    'plugin/compile-dogescript.js'
  ],
  npmDependencies: {"dogescript": "2.3.0"}
});
