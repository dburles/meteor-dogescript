var doge = Npm.require('dogescript');

var handler = function (compileStep) {
  var source = compileStep.read().toString('utf8');
  var outputFile = compileStep.inputPath + ".js";
  var output;

  try {
    output = doge(source);
  } catch (e) {
    // XXX better error handling, once the Plugin interface support it
    throw new Error(
      compileStep.inputPath + ':' +
      (e.location ? (e.location.first_line + ': ') : ' ') +
      e.message
    );
  }

  compileStep.addJavaScript({
    path: outputFile,
    sourcePath: compileStep.inputPath,
    data: output
  });
};

Plugin.registerSourceHandler("djs", handler);
