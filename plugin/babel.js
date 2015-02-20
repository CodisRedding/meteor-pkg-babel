var to5 = Npm.require('babel');


Plugin.registerSourceHandler("babel.js", function (compileStep) {

  var babel = compileStep.read().toString('utf8');
  var five = to5.transform(babel, {sourceMap: 'inline'});

  compileStep.addJavaScript({
    path: compileStep.inputPath,
    sourcePath: compileStep.inputPath,
    data: five.code
  });
});
