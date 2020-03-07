const gulp=require('gulp')

const cssmin=require('gulp-cssmin')

const autoprefixer=require('gulp-autoprefixer')

const sass=require('gulp-sass')

const uglify=require('gulp-uglify')

const babel=require('gulp-babel')

const htmlmin=require('gulp-htmlmin')

const del=require('del')

const webserver=require('gulp-webserver')


const sassHandler=function(){
    return gulp.src('./src/sass/*.scss')
                .pipe(sass())
                .pipe(autoprefixer())
                .pipe(cssmin())
                .pipe(gulp.dest('./dist/css'))
}



const jsHandler=function(){
    return gulp.src('./src/js/*.js')
                .pipe(babel({
                    presets:['@babel/env']
                }))
                .pipe(uglify())
                .pipe(gulp.dest('./dist/js'))
}


const htmlHandler=function(){
    return gulp.src('./src/pages/*.html')
                .pipe(htmlmin({
                    removeAttributeQuotes:true,
                    removeComments:true,
                    collapseBooleanAttributes:true,
                    collapseWhitespace:true,
                    minifyCSS:true,
                    minifyJS:true,
                }))
                .pipe(gulp.dest('./dist/pages'))
}

const imgHandler=function(){
    return gulp.src('./src/images/**')
                .pipe(gulp.dest('./dist/images'))
}

const libHandler=function(){
    return gulp.src('./src/lib/**')
                .pipe(gulp.dest('./dist/lib'))
}

const videoHandler=function(){
    return gulp.src('./src/videos/**')
                .pipe(gulp.dest('./dist/videos'))
}

const audioHandler=function(){
    return gulp.src('./src/audios/**')
                .pipe(gulp.dest('./dist/audios'))
}


const delHandler=function(){
    return del(['./dist'])
}


const webserverHandler=function(){
    return gulp.src('./dist')
                .pipe(webserver({
                    host:'localhost',
                    port:8086,
                    open:'./pages/index.html',
                    livereload:true,
                    proxies:[
                        {
                        source:'/xiangmu',
                        target:'http://127.0.0.1:86/kaola/login1.php'
                        },
                        {
                        source:'/myproject',
                        target:'http://127.0.0.1:86/kaola/login2.php' 
                        }
                    ]
                }))
}

const watchHandler=function(){
    gulp.watch('./src/sass/*.scss',sassHandler)
    gulp.watch('./src/js/*.js',jsHandler)
    gulp.watch('./src/pages/*.html',htmlHandler)
    gulp.watch('./src/images/**',imgHandler)
    gulp.watch('./src/lib/**',libHandler)
    gulp.watch('./src/videos/**',videoHandler)
    gulp.watch('./src/audios/**',audioHandler)
}

module.exports.default=gulp.series(
    delHandler,
    gulp.parallel(sassHandler,jsHandler,htmlHandler,imgHandler,libHandler,videoHandler,audioHandler),
    webserverHandler,
    watchHandler
)
