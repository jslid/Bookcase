
// Include Gulp
var gulp = require('gulp');

// Include Plugins
var jshint = require('gulp-jshint');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var haml = require('gulp-ruby-haml');
var jade = require('gulp-jade');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var path = require('path');

// JS Lint Task
gulp.task('lint', function() {
	return gulp.src('src/js/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

// Coffee JS
gulp.task('coffee', function() {
	return gulp.src('src/coffee/**/*.coffee')
	.pipe(coffee({bare:true}))
	.pipe(gulp.dest('dist/js'))
});

// Uglify - Minify Files
gulp.task('compress', function() {
	return gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
});

// LESS 
gulp.task('less', function() {
	return gulp.src([
		'src/less/bookcase.less',
		'src/less/helpers.less'
		])
	.pipe(less({
		paths: ['src/less']
	}))
	.pipe(gulp.dest('dist/css'));
});

// SASS 
gulp.task('sass', function() {
	return gulp.src('src/scss/*.scss')
	.pipe(sass.sync().on('error', sass.logError))
	.pipe(gulp.dest('dist/css'));
});

// Stylus 
gulp.task('one', function() {
	return gulp.src([
		'src/styl/bookcase.styl',
		'src/styl/helpers.styl'
		])
	.pipe(stylus())
	.pipe(gulp.dest('dist/css'));
});

// HAML 
gulp.task('haml', function() {
	gulp.src('src/*.haml')
	.pipe(haml())
	.pipe(gulp.dest('dist'));
});

// Jade 
gulp.task('templates', function() {
	gulp.src('src/*.jade')
	.pipe(jade({
      pretty: true
    }))
	.pipe(gulp.dest('dist'));
});

// Imagemin 
gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*')
	.pipe(imagemin( {
		progressive: true,
		use: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'))
});

// Watch

/*
    The default for Bookcase is to look for LESS, JADE and Javascript changes. Instructions for making use of CSS Processors or 
    HTML Template Languages is below:
     
    -- CSS Preprocessors
        LESS: To use LESS make 'less' the file location, and the file type .less. Make the tasks 'less'.
        SASS: To use SASS make 'scss' the file location, and the file type .scss. Make the tasks 'sass'.
        STYLUS: To use STYLUS make 'styl' the file location, and the file type .styl. Make the tasks 'one'.

    -- HTML Template Languages
        HAML: To use HAML the file type .haml. Make the tasks 'haml'.
        JADE: To use JADE the file type .jade. Make the tasks 'templates'.
    */

gulp.task('watch', function() {
	gulp.watch('src/js/**/*.js', ['lint']);
	gulp.watch('src/coffee/**/*.coffee', ['coffee']);
	gulp.watch('src/**/*.jade', ['templates']);
	gulp.watch('src/less/**/*.less', ['less']);
});

// Default Task
gulp.task('default', ['lint', 'coffee', 'templates', 'less', 'imagemin', 'watch']);