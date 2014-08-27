/**
 * Created by FeikoLai on 27/8/14.
 */
var util = require('util');
var google = require('../lib/googleapis.js');
var OAuth2 = google.auth.OAuth2;

//set up oauth
var oauth2Client = new OAuth2
(
    '586748347463-deejt4dt0nkec8f5fic4opkcpatf1t5u.apps.googleusercontent.com',
    'N9eumiy16ciGlawjk68FJZPK',
    'https://nodejstest-c9-dg3feiko.c9.io/auth/google/callback'
);

//set credentials (usually after oauth login)
oauth2Client.setCredentials({
    access_token: 'ya29.bgCtr8UG0JKRRyEAAAAfor3USgJK_u2MBhg7k5p2Cbwks9tEAgJhMbN9xk15_QakyYT9GOT4MSe8VeTftRk',
    refresh_token: '1/euLHaGvofYA8dhA3F-Vt89v_ShPNlHWVEpJ0eFUbkcg'
});

//use cloudprint methods
var cloudprint = google.cloudprint('beta');

//list all printers
cloudprint.printers.search({ auth: oauth2Client }, function(err, response){
    console.log('response: ' + util.inspect(response, {showHidden: false, depth: null}));
    console.log('err: ' + util.inspect(err, {showHidden: false, depth: null}));
});

//get detail info of a printer
cloudprint.printers.get({ printerid: '__google__docs', auth: oauth2Client }, function (err, response) {
    console.log('response: ' + util.inspect(response, {showHidden: false, depth: null}));
    console.log('err: ' + util.inspect(err, {showHidden: false, depth: null}));
});

//submit jobs
cloudprint.jobs.sumbmit({
    auth: oauth2Client,
    printerid: '__google__docs',
    title: 'test print',
    content: 'http://assets.geteasypost.com/postage_labels/labels/yWqI3P.png',
    contentType: 'url',
    tag: ['postmen'],
    ticket: {
        "print": {
            "reverse_order": {
                "reverse_order": false
            },
            "copies": {
                "copies": 1
            },
            "vendor_ticket_item": [
                {
                    "id": "PageRegion",
                    "value": "w288h360"
                },
                {
                    "id": "MediaType",
                    "value": "Saved"
                },
                {
                    "id": "Darkness",
                    "value": "-1"
                },
                {
                    "id": "zePrintRate",
                    "value": "Default"
                }
            ],
            "fit_to_page": {
                "type": "SHRINK_TO_PAGE"
            },
            "media_size": {
                "height_microns": 152400,
                "width_microns": 101600,
                "is_continuous_feed": false,
                "vendor_id": "w288h432"
            },
            "page_orientation": {
                "type": "AUTO"
            },
            "dpi": {
                "vertical_dpi": 203,
                "horizontal_dpi": 203,
                "vendor_id": "203dpi"
            }
        },
        "version": "1.0"
    }
}, function (err, response) {
    console.log('response: ' + util.inspect(response, {showHidden: false, depth: null}));
    console.log('err: ' + util.inspect(err, {showHidden: false, depth: null}));
});
