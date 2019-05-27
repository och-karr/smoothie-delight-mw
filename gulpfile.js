const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const sassLint = require('gulp-sass-lint');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');


//browserSync settings
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    })
})

//RELOAD page when HTML change
gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({
            stream: true
        }))
});

//COMPILE scss to css and RELOAD page when SCSS change
gulp.task('sass', function() {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

//COMPILE scss to css and RELOAD page when SCSS change
gulp.task('sass-lint', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
});

//RELOAD page when JS change
gulp.task('js', function() {
    return gulp.src('app/js/**/*.js')
        .pipe(browserSync.reload({
            stream: true
        }))
});

//SAVE HTML file to dist folder when change
gulp.task('save-html', function() {
    return gulp.src('./app/*.html')
        .pipe(gulp.dest('./dist/'));
});

//JOIN, MIN and SAVE CSS file to dist folder when change
gulp.task('save-css', function() {
    return gulp.src('./app/css/*.css')
        .pipe(concat('styles.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('./dist/css/'));
});

//JOIN, MIN and SAVE JS file to dist folder when change
gulp.task('save-js', function() {
    return gulp.src('./app/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('index.min.js'))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('./dist/js/'));
});

//SAVE IMAGES folder to dist folder when change
gulp.task('save-images', function() {
    return gulp.src('./app/images/**/*')
        .pipe(gulp.dest('./dist/images'));
});

//WATCH tasks
gulp.task('watch', function(){
    gulp.watch(['app/*.html', 'app/scss/**/*.scss', 'app/js/**/*.js', './app/images/**/*' ], gulp.series(['html', 'sass', 'js', 'save-html', 'save-css', 'save-js', 'save-images'])); //'sass-lint',
});

//run DEFAULT
gulp.task('default', gulp.series(['save-html', 'sass', 'save-css' , 'save-js', 'save-images', gulp.parallel('browserSync', 'watch')])); //'sass-lint',