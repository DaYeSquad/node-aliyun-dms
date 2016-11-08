// Copyright 2016 Frank Lin (lin.xiaoe.f@gmail.com). All rights reserved.
// Use of this source code is governed a license that can be found in the LICENSE file.

var DirectMailService = require('../src/dms.js');
var dms = new DirectMailService({
  'accessid': '',
  'accesskey': ''
});

var accountName = '';
var toAddress = '';
var fromAlias = '';
var subject = '';
var htmlBody = '<p>hello world</p>';

dms.sendSingleMail(accountName, true, 0, toAddress, fromAlias, subject, htmlBody, undefined, function(error, res) {
  console.log(res);
});