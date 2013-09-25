'use strict'; /*jslint node: true, es5: true, indent: 2 */
var birdy = require('..');

exports.versions = [
  '0.3.0', '0.3.1', '0.3.2', '0.4.0', '0.4.1', '0.5.0', '0.5.1', '0.5.2', '0.6.0', '0.6.1',
  '1.0.1', '1.1.0', '1.1.1', '1.1.2', '1.2.0', '1.3.0', '1.4.0',
  '1.5.0', '1.5.1', '1.6.0', '1.6.1', '1.6.2', '1.7.0', '1.7.1', '1.7.2',
  '2.0.0', '2.1.0', '2.2.0', '2.2.1',
];

exports.resolve = function(version, callback) {
  var cloudflare = birdy.cdn.cloudflare('moment.js')(version);
  var github = birdy.cdn.github('moment/moment')(version);
  callback(null, {
    'moment.min.js': birdy.mapApply([cloudflare], 'moment.min.js'),
    'moment.js': birdy.mapApply([github, cloudflare], 'moment.js')
  });
};
