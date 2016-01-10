'use strict';

/* XXX https://github.com/mozilla/fxa-relier-client/issues/68 :__(
var FxaRelierClient =
  require('../bower_components/fxa-relier-client/fxa-relier-client.min.js');
*/

function required(aValue, aName) {
  if (!aValue) {
    throw new Error('Missing ' + aName);
  }
}

function getParameterByName(aName) {
  aName = aName.replace(/[\[]/, '\\[").replace(/[\]]/, "\\]');
  var regex = new RegExp('[\\?&]' + aName + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? null :
                     decodeURIComponent(results[1].replace(/\+/g, ' '));
}

/**
 * @class FoxBoxConnect
 * @constructor
 * @param {String} aFxaClientId Firefox Accounts client ID.
 * @param {String} aScope
 * @param {String} aToken
 */
var FoxBoxConnect = function(aFxaClientId, aScope, aToken) {
  required(aFxaClientId, 'client id');
  required(aScope, 'scope');

  this.mFxaClient = new window.FxaRelierClient(aFxaClientId, {
    oauthHost: 'https://oauth-stable.dev.lcip.org/v1'
  });

  this.mScope = aScope;
  this.mToken = aToken || getParameterByName('code');
};

FoxBoxConnect.prototype.postMessage = function(aMessage) {
  // If we have not gotten a token yet, we need to queue the message
  // and go through the sign in flow.
  var queuedMessage = localStorage.getItem('message');
  if (!this.mToken) {
    if (queuedMessage) {
      throw new Error();
    }

    localStorage.setItem('message', JSON.stringify(aMessage));
    this.mFxaClient.auth.signIn({
      state: Date.now(),
      // XXX fxa-relier-client fails if no redirectUri is added to the object
      // although its value is ignored...
      redirectUri: undefined,
      scope: this.mScope
    });
    return;
  }

  if (queuedMessage) {
    aMessage = queuedMessage;
  }

  console.log('Sending message', aMessage);

  // XXX start WebRTC connection if none and send message
};

FoxBoxConnect.prototype.onmessage = function(aEventHandler) {
  this._onmessage = aEventHandler;
};

module.exports.FoxBoxConnect = FoxBoxConnect;
