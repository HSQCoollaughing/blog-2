var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin');
//JS压缩
gulp.task('jsuglify', function() {
    return gulp.src('public/js/src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js/src/'))
});
gulp.task('jsuglify2', function() {
    return gulp.src('public/js/src/schemes/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js/src/schemes/'))
});
gulp.task('jsuglify3', function() {
    return gulp.src('public/lib/jquery_layload/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/lib/jquery_layload'))
});

//public-fancybox-css压缩
gulp.task('fancybox:css', function() {
    return gulp.src('public/lib/fancybox/jquery.fancybox.css')
        .pipe(cssmin())
        .pipe(gulp.dest('public/lib/fancybox/'));
});
//CSS压缩
gulp.task('cssmin', function() {
    return gulp.src('public/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('public/css/'));
});
//图片压缩
gulp.task('images', function() {
    gulp.src(['public/images/*.*'])
        .pipe(imagemin({
            progressive: false
        }))
        .pipe(gulp.dest('public/images/'));
});
gulp.task('img', function() {
    gulp.src(['public/img/*.*'])
        .pipe(imagemin({
            progressive: false
        }))
        .pipe(gulp.dest('public/img/'));
});
//前端构建优化  全部压缩  暂时不做合并文件的请求
gulp.task('build', ['jsuglify','jsuglify2','jsuglify3', 'cssmin', 'images',"img",  'fancybox:css']);