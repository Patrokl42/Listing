var gulp = require('gulp');
var pug = require('gulp-pug');
gulp.task('views', function () {
    return gulp.src('./dev/*.pug')
        .pipe(pug({
            // Your options in here.
            pretty:true
        }))
        .pipe(gulp.dest('./app/'));
});

gulp.task('filters', function () {
    return gulp.src('./dev/filters/*.pug')
        .pipe(pug({
            // Your options in here.
            pretty:true
        }))
        .pipe(gulp.dest('./app/filters/'));
});

gulp.task('bulma-copy',function(){
    gulp.src('./dev/bulma/css/*')
        .pipe(gulp.dest('./app/css/bulma/'));
});

gulp.task('images-copy',function(){
    gulp.src('./dev/images/*')
        .pipe(gulp.dest('./app/images/'));
});

gulp.task('default',['views','bulma-copy','images-copy','filters']);

