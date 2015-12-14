
var Applause = require('applause')
  , RawSource = require('webpack-core/lib/RawSource')

module.exports = ReplaceTaskWebpackPlugin;

function ReplaceTaskWebpackPlugin(option){
  this._applause = Applause.create(option);
}

ReplaceTaskWebpackPlugin.prototype.apply = function(compiler){
  var self = this;

  compiler.plugin('compilation', function(compilation){

    compilation.plugin('optimize-chunk-assets', function(chunks, callback){
      var files = [];
      chunks.forEach(function(chunk){
        chunk.files.forEach(function(file){
          files.push(file);
        });
      });

      compilation.additionalChunkAssets.forEach(function(file) {
        files.push(file);
      });

      files.forEach(function(file){

        var asset = compilation.assets[file];

        var input = asset.source();

        var output = self._applause.replace(input);

        if(output.content !== false){
          compilation.assets[file] = new RawSource(output.content);
        }
      });

      callback();
    });
  });
};
