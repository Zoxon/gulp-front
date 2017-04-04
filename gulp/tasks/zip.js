'use strict';

var runSequence = require('run-sequence');

module.exports = function() {
	return function(callback) {
		return runSequence(
			'build',
			'build:zip',
			callback
		);
	}
}
