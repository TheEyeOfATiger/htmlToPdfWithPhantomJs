var fs = require('fs'),
    args = require('system').args,
    page = require('webpage').create();
// page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';
page.settings.userAgent = 'Chrome/37.0.2062.120';
// page.settings.loadImages = true;
// page.settings.localToRemoteUrlAccessEnabled  = true;
page.customHeaders = {
    "Connection": "keep-alive"
};
// page.addCookie({
//     'name':     'Valid-Cookie-Name',   /* required property */
//     'value':    'Valid-Cookie-Value',  /* required property */
//     'domain':   'localhost',           /* required property */
//     'path':     '/foo',
//     'httponly': true,
//     'secure':   false,
//     'expires':  (new Date()).getTime() + (1000 * 60 * 60)   /* <-- expires in 1 hour */
// });

page.open(args[1], function (status)
{
    page.paperSize = {
        format: "A4",
        orientation: "orientation",
        margin: {
            left:"0.35cm",
            right:"0.35cm",
            top:"0.35cm",
            bottom:"0.35cm"
        }
    };
    page.zoomFactor = 1;

    if (status !== 'success') {
        console.log('Unable to load the file!');
        phantom.exit(1);
    }
    else {
              page.render(args[2]);
              phantom.exit();
    }
});