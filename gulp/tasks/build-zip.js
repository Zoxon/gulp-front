'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');
var getTimestamp = require('../util/get-timestamp.js')
var path = require('path');
var cwd = process.cwd();
var toCamelCase = require('../util/to-camel-case.js');

var datetime = '-' + getTimestamp();
var cwdDirName = path.basename(cwd) || 'dist';
var zipName = toCamelCase(cwdDirName) + datetime + '.zip';


module.exports = function(options) {
	return function() {
		return gulp.src('dest/**/*')
			.pipe(zip(zipName))
			.pipe(gulp.dest('zip'));
	}
}
