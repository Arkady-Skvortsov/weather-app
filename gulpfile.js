let gulp = require('gulp');
let browserSync = require('browser-sync').create();

function Sync() {
   browserSync.init({
      server: {
      	 baseDir: './',
          index: "weather.html"
      },
      port: 3000
   });
}

function Reload() {
	browserSync.reload();
}

function Watch() {
	gulp.watch('weather.css', Reload);
	gulp.watch('weather.html', Reload);
}

gulp.task('default', gulp.parallel(Watch, Sync));
