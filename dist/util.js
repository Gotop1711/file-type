'use strict';var _interopRequireDefault=require("@babel/runtime-corejs3/helpers/interopRequireDefault"),_parseInt2=_interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int")),_slice=_interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice")),_toConsumableArray2=_interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray")),_map=_interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));exports.stringToBytes=function(a){var b;return(0,_map["default"])(b=(0,_toConsumableArray2["default"])(a)).call(b,function(a){return a.charCodeAt(0)})};var uint8ArrayUtf8ByteString=function(a,b,c){return String.fromCharCode.apply(String,(0,_toConsumableArray2["default"])((0,_slice["default"])(a).call(a,b,c)))};/**
ID3 UINT32 sync-safe tokenizer token.
28 bits (representing up to 256MB) integer, the msb is 0 to avoid "false syncsignals".
*/exports.tarHeaderChecksumMatches=function(a){// Does not check if checksum field characters are valid
if(512>a.length)// `tar` header size, cannot compute checksum without it
return!1;// Initialize signed bit sum
for(var b,c=128,d=256,e=0,f=0;148>f;f++)b=a[f],d+=b,e+=b&c;// Skip checksum field
for(var h,j=156;512>j;j++)h=a[j],d+=h,e+=h&c;var g=(0,_parseInt2["default"])(uint8ArrayUtf8ByteString(a,148,154),8);// Read sum in header
// Some implementations compute checksum incorrectly using signed bytes
return(// Checksum in header equals the sum we calculated
g===d||// Checksum in header equals sum we calculated plus signed-to-unsigned delta
g===d-(e<<1))},exports.uint8ArrayUtf8ByteString=uint8ArrayUtf8ByteString,exports.uint32SyncSafeToken={get:function get(a,b){return 127&a[b+3]|a[b+2]<<7|a[b+1]<<14|a[b]<<21},len:4};