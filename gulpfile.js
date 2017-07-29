var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create()

gulp.task('sass',function(){
    return gulp.src('src/web.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream({match: '**/*.css'}))
})

// gulp.task('js', function() {
//     return gulp.src('js/ihmaMain.js')
//         .pipe(concat('main.js'))    //合并所有js到main.js
//         .pipe(gulp.dest('dist/js'))    //输出main.js到文件夹
//         .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
//         .pipe(uglify())    //压缩
//         .pipe(gulp.dest('dist/js'))  //输出
// })

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
          baseDir: ".",
          directory: true,
        }
    })

    gulp.watch("src/*.scss", ['sass'])
    gulp.watch("src/*.html").on('change', browserSync.reload)
})

//默认任务
gulp.task('default',['sass'])

//监听文件
gulp.task('watch',function () {
    return gulp.watch('src/web.scss',['sass'])
})
