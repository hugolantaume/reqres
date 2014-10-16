var gulp = require("gulp");
var livereload = require("gulp-livereload");
var sass = require("gulp-ruby-sass");
var watch = require("gulp-watch");
var autoprefix = require("gulp-autoprefixer");

gulp.task("sass", function() {
	gulp.src(["assets/scss/**/*.scss"])
		.pipe(sass())
		.pipe(autoprefix("last 2 versions"))
		.pipe(gulp.dest("./public/css/"))
		.pipe(livereload());
});

gulp.task("default", ["sass"], function() {
	gulp.watch("assets/scss/**/*.scss", ["sass"]);
});