'use strict';

var FxaRelierClient =
  require('../bower_components/fxa-relier-client/fxa-relier-client.min.js');

function required(value, name) {
  if (!value) {
    throw new Error('Missing ' + name);
  }
}

/**
 * @class FoxBoxConnect
 * @constructor
 * @param {String} fxaClientId Firefox Accounts client ID.
 * @param {String} fxaClientSecret Firefox Accounts client secret.
 */

var FoxBoxConnect = function(fxaClientId, fxaClientSecret) {
  required(fxaClientId);
  required(fxaClientSecret);

  this.fxaClient = new FxaRelierClient(fxaClientId, {
    clientSecret: fxaClientSecret
  });
};

FoxBoxConnect.prototype.start = function() {

};

FoxBoxConnect.prototype.stop = function() {
};

FoxBoxConnect.prototype.postMessage = function() {
};

FoxBoxConnect.prototype.onMessage = function() {
};

module.exports = {
  FoxBoxConnect: FoxBoxConnect
};
