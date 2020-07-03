/**
 * Appends `default` property to CommonJS `require`.
 *
 * @see {@link https://github.com/facebook/jscodeshift}
 * @see {@link https://astexplorer.net/}
 *
 * @param {Object} fileInfo
 * @param {String} fileInfo.source
 * @param {Object} api
 * @param {Function} api.jscodeshift
 * @return {String}
 */
module.exports = function (fileInfo, api) {
  var j = api.jscodeshift;

  return (
    j(fileInfo.source)
      // find all `require()`
      .find(j.CallExpression, {
        callee: {
          type: 'Identifier',
          name: 'require'
        }
      })
      // exclude `require()` with `.default`
      .filter(function (path) {
        var property = path.parent.node.property;
        return property ? property.name !== 'default' : true;
      })
      // append `.default` to `require()`
      .replaceWith(function (path) {
        return j.memberExpression(path.value, j.identifier('default'));
      })
      .toSource()
  );
};
