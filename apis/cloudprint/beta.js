/**
 * Created by FeikoLai on 27/8/14.
 */

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;

function CloudPrint(options) {

    var self = this;
    this._options = options || {};
    this.printers = {
        search: function (params, callback) {
            var parameters = {
                options: {
                    url: 'https://www.google.com/cloudprint/search',
                    method: 'POST'
                },
                params: params,
                context: self
            };
            return createAPIRequest(parameters, callback);
        },
        get: function (params, callback) {
            var parameters = {
                options: {
                    url: 'https://www.google.com/cloudprint/printer',
                    method: 'POST'
                },
                params: params,
                requiredParams: ['printerid'],
                context: self
            };
            return createAPIRequest(parameters, callback);
        }
    };
    this.jobs =
    {
        sumbmit: function (params, callback) {
            var parameters = {
                options: {
                    url: 'https://www.google.com/cloudprint/submit',
                    method: 'POST'
                },
                params: params,
                requiredParams: ['printerid','title','ticket','content'],
                context: self
            };
            return createAPIRequest(parameters, callback);
        }
    }
}

module.exports = CloudPrint;