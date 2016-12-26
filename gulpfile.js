var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin');
     htmlmin = require('gulp-htmlmin');
     htmlclean = require('gulp-htmlclean');

//JS压缩
gulp.task('jsuglify', function() {
    return gulp.src('public/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js/'))
});
gulp.task('jsuglify2', function() {
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
            progressive:true
        }))
        .pipe(gulp.dest('public/img/'));
});
//html压缩
    gulp.task('minify-html', function() {
      return gulp.src('public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
             removeComments: true,
             minifyJS: true,
             minifyCSS: true,
             minifyURLs: true,
        }))
        .pipe(gulp.dest('public/'))
    });
//前端构建优化  全部压缩  暂时不做合并文件的请求
gulp.task('build', ['jsuglify','jsuglify2','minify-html', 'cssmin', 'images',"img",  'fancybox:css']);

//使用模块来监听文件改变
var bs= require("browser-sync").create();
gulp.task("sync", function() {
	bs.init({
        files: "**",
      proxy:"localhost:4000/blog"
   });
  gulp.watch("source/**/*.md").on('change', bs.reload);
  });
  


