var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('compileSass',function(){
    gulp.src('./src/sass/*.scss')

    .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))

    .pipe(gulp.dest('./src/css/'))
});

gulp.task('jtSass',function(){
    gulp.watch('./src/sass/*.scss',['compileSass'])
});

var browserSync = require('browser-sync');

gulp.task('server',function(){
    browserSync({
        port:1001,
        proxy:'http://localhost:1000',

        files:['./src/**/*.html','./src/css/*.css','./src/js/*.js','./src/img/*.jpg','./src/css/img/*.png']
    });
    gulp.watch('./src/sass/*.scss',['compileSass'])
})
