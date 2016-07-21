var concat = require('gulp-concat'), // Concatena archivos
	connect = require('gulp-connect'), // Dependencia para crear un servidor local
	gulp = require('gulp'),
	gutil = require('gulp-util'), // Funciones de utilidad para gulp
	historyApiFallback = require('connect-history-api-fallback'), // historial para SPA
	merge = require('merge2'),
	sourcemaps = require('gulp-sourcemaps'),
	ts = require('gulp-typescript'),
	uglify = require('gulp-uglify'); // Minifica archivos

// Rutas
var paths = {
	js: './app/scripts/**/*.js',
	ts: './app/scripts/**/*.ts'
};

// Opciones
var tsProject = ts.createProject({
    declaration: true, // Genera el archivo d.ts correspondiente
    noExternalResolve: true, // No resuelve archivos que no esten en el input
    removeComments: true, // Remueve los comentarios
    allowJs: true,
    sortOutput: true
});

// Tarea por defecto
gulp.task('scripts', function (){
    var tsResult = gulp.src(paths.ts)
    	.pipe(sourcemaps.init()) // This means sourcemaps will be generated 
        .pipe(ts(tsProject));
 
    return merge([
        tsResult.dts.pipe(gulp.dest('./app/build')), // Archivo de definiciones
        tsResult.js
        	.pipe(concat('build.js')) // You can use other plugins that also support gulp-sourcemaps 
        	.pipe(uglify().on('error', gutil.log))
        	.pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file 
        	.pipe(gulp.dest('./app/build')) // Archivos javascript
    ]);
});

// Creamos el servidor con la opcion livereload desactivada
gulp.task('server', function (){
	connect.server({
		root: './app',
		port: 3000,
		livereload: false,
	});
});

// Tareas watch
gulp.task('watch', function() {
    gulp.watch(paths.ts, ['scripts']);
});

// Tareas por defecto
gulp.task('default', ['server', 'scripts', 'watch']);