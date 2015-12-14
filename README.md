## replace-task-webpack-plugin
A gulp-replace-task port to webpack

### Usage

To replace all `@@foo` to `bar`, and replace all `/baz/` to `bazbaz`.

```js
// webpack.config.js
module.exports = {
  // ... other configs
  plugins: [
    new ReplaceTaskWebpackPlugin({
      patterns: [
        {
          match: 'foo',
          replacement: 'bar'
        },
        {
          match: /baz/g,
          replacement: function(){
            return 'bazbaz';
          }
        }
      ]
    })
  ]
};
```

### Also see
- [gulp-replace-task](https://github.com/outaTiME/gulp-replace-task)
- [Applause](https://github.com/outaTiME/applause)

### License
MIT
