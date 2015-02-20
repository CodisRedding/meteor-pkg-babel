Package.describe({
  name: 'fourq:babel',
  summary: 'Turn ES6 code into readable vanilla ES5 with source maps',
  version: '2.0.0'
});


Package.registerBuildPlugin({
  name: "babel",
  use: [],
  sources: [
    'plugin/babel.js'
  ],
  npmDependencies: {
    "babel": "4.3.0"
  }
});
