/**
 * Appends `default` property to CommonJS `require`.
 *
 * @see https://github.com/facebook/jscodeshift
 * @see https://astexplorer.net/
 *
 * @param {Object} fileInfo
 * @param {String} fileInfo.source
 * @param {Object} api
 * @param {Function} api.jscodeshift
 * @return {String}
 */
module.exports = function (fileInfo, api) {
  var j = api.jscodeshift;

  return j(fileInfo.source)
    .find(j.CallExpression, {
      callee: {
        type: 'Identifier',
        name: 'require'
      }
    })
    .replaceWith(function (path) {
      return j.memberExpression(path.value, j.identifier('default'));
    })
    .toSource();
};
