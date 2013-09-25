'use strict'; /*jslint node: true, es5: true, indent: 2 */
var birdy = require('..');

exports.versions = [
  '1.5.2',
  '1.5.3',
  '1.6.0',
  '1.7.0',
  '1.7.1',
  '1.7.2',
  '1.7.3',
  '1.8.0',
  '1.8.1',
  '1.8.2',
  '1.8.4',
  '1.8.5',
  '1.8.6',
  '1.8.7',
  '1.8.8',
  '1.8.9',
  '1.8.10',
  '1.8.11',
  '1.8.12',
  '1.8.13',
  '1.8.14',
  '1.8.15',
  '1.8.16',
  '1.8.17',
  '1.8.18',
  '1.8.19',
  '1.8.20',
  '1.8.21',
  '1.8.22',
  '1.8.23',
  '1.8.24',
  '1.9.0',
  '1.9.1',
  '1.9.2',
  '1.10.0',
  '1.10.1',
  '1.10.2',
  '1.10.3',
];

exports.resolve = function(version, callback) {
  var cloudflare = birdy.cdn.cloudflare('jqueryui')(version);
  var google = birdy.cdn.google('jqueryui')(version);
  var http = birdy.cdn.http('code.jquery.com/ui')(version);

  callback(null, {
    'jquery-ui.min.js': birdy.mapApply([cloudflare, google, http], 'jquery-ui.min.js'),
    'jquery-ui.js': birdy.mapApply([cloudflare, google, http], 'jquery-ui.js')
  });
};
