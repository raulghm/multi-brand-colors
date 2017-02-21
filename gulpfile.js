/*!
 * Gulpfile Setup
 * author: Raúl Hernández <raulghm@gmail.com>
 */

'use strict';

// Include Gulp and other build lautomation tools and utilities.
// See: https://github.com/gulpjs/gulp/blob/master/docs/API.md

/**
	Settings
*/

var gulp = require('gulp'),
		$ = require('gulp-load-plugins')(),
		runSequence = require('run-sequence'),

		SRC = './src',
		DEST = './dist',

		vars = {
			name: require('./package.json').name,
			authors: require('./package.json').authors,
			version: require('./package.json').version,
			homepage: require('./package.json').homepage,
			description: require('./package.json').description,
			colors: require(SRC + '/data/colors.json'),
			prefix: 'mbc',
			date: new Date()
		},
		template = {
			name: vars.name,
			version: vars.version,
			colors: vars.colors,
			prefix: vars.prefix,
			comments: ['/*!',
								'	' + vars.name + ' ' + vars.version,
								'	' + vars.homepage,
								'	Licensed under the MIT license - http://opensource.org/licenses/MIT',
								'	Copyright (c) ' + vars.date.getFullYear() + ' Raúl Hernández',
								'*/'].join('\n')
		};

var parseJson = function(obj, prefix) {
	if (typeof obj !== 'object' || !obj) {
		return false;
	}

	var keys = Object.keys(obj),
			keysLen = keys.length,
			prefix = prefix || '';

	for (var i=0; i<keysLen ;i++) {
		obj[prefix+keys[i]] = obj[keys[i]];
		if(typeof obj[keys[i]] === 'object') {
			parseJson(obj[prefix+keys[i]],prefix);
		}

		delete obj[keys[i]];
	}

	return JSON.stringify(obj, null, '\t');
};

/**
	Tasks
*/

// Render templates
gulp.task('render', function () {
	return gulp.src(SRC + '/templates/**/*')
		.pipe($.data(function() {
			return template;
		}))
		.pipe($.template())
		.pipe(gulp.dest(DEST));
});

// Minify CSS
gulp.task('minifyCss', function () {
	return gulp.src(DEST + '/css/index.css')
		.pipe($.cssnano())
		.pipe($.rename('index.min.css'))
		.pipe(gulp.dest(DEST + '/css'));
});

// Render JSON
gulp.task('json', function () {
	$.file('index.json', parseJson(template.colors))
	.pipe(gulp.dest(DEST + '/json'));
});

// Render List
gulp.task('list', function () {
	return gulp.src(SRC + '/list.md')
		.pipe($.data(function() {
			return template;
		}))
		.pipe($.template())
		.pipe(gulp.dest('./'));
});

// Test
gulp.task('test', function () {
	return gulp.src(SRC + '/test/index.html')
		.pipe($.data(function() {
			return template;
		}))
		.pipe($.template())
		.pipe(gulp.dest('./test'));
});

// Default task
gulp.task('default', function () {
	runSequence('render', 'minifyCss', 'json', 'list', 'test');
});
