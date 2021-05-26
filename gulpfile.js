var gulp 		  = require('gulp'),
	browserSync   = require('browser-sync').create(),
	sass 		  = require('gulp-sass'),
    sassGlob      = require('gulp-sass-glob'),
	plumber		  = require('gulp-plumber'),
	notify 		  = require('gulp-notify'),
	autoprefixer  = require('gulp-autoprefixer'),
	sourcemaps	  = require('gulp-sourcemaps'),
    pug           = require('gulp-pug'),
    del           = require('del'),
    runSequence   = require('run-sequence'),
    cssmin 		  = require('gulp-cssmin'),
    cssnano		  = require('gulp-cssnano');
gulp.task('clean:build', function() {
    return del('./build');
});

gulp.task('server', function() {
	browserSync.init({
		server: ["./build"],
    index: "job.html"
	});
	gulp.watch('src/pug/**/*.pug', ['pug']);
	gulp.watch('src/sass/**/*.sass', ['sass']);

	gulp.watch('src/js/**/*.js', ['copy:js']);
	gulp.watch('src/libs/**/*.*', ['copy:libs']);
	gulp.watch('src/img/**/*.*', ['copy:img']);
	gulp.watch('src/fonts/**/*.*', ['copy:fonts']);
});

gulp.task('copy:js', function() {
	return gulp.src('src/js/**/*.js')
	.pipe(gulp.dest('./build/js'))
	.pipe(browserSync.stream());
});

gulp.task('copy:libs', function() {
	return gulp.src('src/libs/**/*.*')
	.pipe(gulp.dest('./build/libs'))
	.pipe(browserSync.stream());
});

gulp.task('copy:img', function() {
	return gulp.src('src/img/**/*.*')
	.pipe(browserSync.stream())
	.pipe(gulp.dest('./build/img'));
});

gulp.task('copy:fonts', function() {
	return gulp.src('src/fonts/**/*.*')
	.pipe(gulp.dest('./build/fonts'))
	.pipe(browserSync.stream());
});

gulp.task('pug', function(succes, error) {
	return gulp.src('./src/pug/pages/**/*.pug')
	.pipe(pug().on( 'error', notify.onError({
		message: "<%= error.message %>",
		title  : "Pug Error!"
		})))
	.pipe(gulp.dest('./build'))
	.pipe(browserSync.stream());
});

gulp.task('sass', function(succes, error) {
	return gulp.src('./src/sass/**/*.sass')
	.pipe(sass().on( 'error', notify.onError({
		message: "<%= error.message %>",
		title  : "sass Error!"
		})))
	.pipe(autoprefixer({
		overrideBrowserslist: ['> 1%', 'last 9999 versions', 'Firefox >= 20', 'iOS >=7', 'ie 8', 'ie 7', 'Safari >=7'],
		cascade: false,
		grid: true
	}))
	.pipe(sourcemaps.write())
	.pipe(cssmin())
	.pipe(cssnano())
	.pipe(gulp.dest('./build/css'))
	.pipe(browserSync.stream());
});

gulp.task('default', function(callback){
	runSequence(
	'clean:build',
	['sass', 'pug', 'copy:js', 'copy:libs', 'copy:img', 'copy:fonts'],
	'server',
	callback
	)
});


