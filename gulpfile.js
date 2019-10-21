const gulp = require("gulp"),
  terser = require("gulp-terser"),
  rename = require("gulp-rename"),
  browserSync = require("browser-sync");
gulp.task("scripts", function() {
  return gulp
    .src("./js/*.js")
    .pipe(terser())
    .pipe(rename({ extname: ".min.js" }))
    .pipe(gulp.dest("./build/js"));
});
gulp.task("say_hello", function(done) {
  console.log("Hello!");
  done();
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.watch(["*.html","build/js/*.js", "css/*.css"])
    .on("change", browserSync.reload);

    gulp.task("watch", function() {
    gulp.watch("js/*.js", gulp.series("scripts"));
});

gulp.task("default", gulp.parallel("browser-sync", "scripts"));