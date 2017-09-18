var compressor = require('node-minify'); 
compressor.minify({
  compressor: 'uglifyjs',
  input: './index.js',
  output: './dist/linq-equivalent.min.js',
  callback: function (err, min) {}
});

compressor.minify({
  compressor: 'no-compress',
  input: './index.js',
  output: './dist/linq-equivalent.js',
  callback: function (err, min) {}
});
