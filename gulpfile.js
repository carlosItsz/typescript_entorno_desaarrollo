var concat = require('gulp-concat'), // Concatena archivos
	gulp = require('gulp'),
	gutil = require('gulp-util'), // Funciones de utilidad para gulp
	merge = require('merge2'),
	ts = require('gulp-typescript'),
	uglify = require('gulp-uglify'); // Minifica archivos

// Rutas
var paths = {
	js: './app/release/**/*.js',
	ts: './app/ts/**/*.ts'
};

// Opciones
var tsProject = ts.createProject({
    declaration: true, // Genera el archivo d.ts correspondiente
    noExternalResolve: true, // No resuelve archivos que no esten en el input
    removeComments: true, // Remueve los comentarios
    allowJs: true
});

// Tarea por defecto
gulp.task('scripts', ['minify-js'], function (){
    var tsResult = gulp.src(paths.ts)
        .pipe(ts(tsProject));
 
    return merge([
        tsResult.dts.pipe(gulp.dest('./app/release')), // Archivo de definiciones
        tsResult.js.pipe(gulp.dest('./app/release')) // Archivos javascript
    ]);
});

// Comprime los archivos javascript
gulp.task('minify-js', function() {
	gulp.src(paths.js)
	.pipe(concat('build.js'))
	.pipe(uglify().on('error', gutil.log))
	.pipe(gulp.dest('./app/build'))
});

// Tareas watch
gulp.task('watch', ['scripts'], function() {
    gulp.watch(paths.ts, ['scripts']);
});

// Tareas por defecto
gulp.task('default', ['watch']);