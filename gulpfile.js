const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const fileInclude = require("gulp-file-include");
const replace = require("gulp-replace");

const { rollup } = require("rollup");
const resolve = require("@rollup/plugin-node-resolve").nodeResolve;
const commonjs = require("@rollup/plugin-commonjs");
const postcss = require("rollup-plugin-postcss");
const rename = require("gulp-rename");

const fs = require("fs/promises");
const path = require("path");

function scssTask() {
  return src("src/scss/pages/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: ["src/scss"],
      }).on("error", sass.logError)
    )
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
}

async function jsTask() {
  const entryPoints = ["index", "about", "car-details"];

  for (const name of entryPoints) {
    const bundle = await rollup({
      input: `src/js/pages/${name}.js`,
      plugins: [resolve(), commonjs(), postcss({ extract: false })],
    });

    await bundle.write({
      file: `dist/js/${name}.js`,
      format: "iife",
      sourcemap: true,
    });
  }

  browserSync.reload();
}

function htmlTask() {
  return src(["src/pages/*.html"])
    .pipe(fileInclude({ prefix: "@@", basepath: "@file" }))
    .pipe(replace(/(src|href)=["']\/(.*?)["']/g, '$1="$2"'))
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
}

function assetsTask() {
  return src("src/assets/**/*", { buffer: false }).pipe(dest("dist/assets"));
}

async function copyAssets(srcDir = "src/assets", destDir = "dist/assets") {
  async function copyRecursive(srcPath, destPath) {
    const entries = await fs.readdir(srcPath, { withFileTypes: true });
    await fs.mkdir(destPath, { recursive: true });

    for (const entry of entries) {
      const srcEntry = path.join(srcPath, entry.name);
      const destEntry = path.join(destPath, entry.name);

      if (entry.isDirectory()) {
        await copyRecursive(srcEntry, destEntry);
      } else {
        await fs.copyFile(srcEntry, destEntry);
      }
    }
  }

  await copyRecursive(srcDir, destDir);
}

function assetsTask(done) {
  copyAssets()
    .then(() => {
      done();
    })
    .catch((err) => {
      console.error("Asset copy failed:", err);
      done(err);
    });
}

function serve() {
  browserSync.init({ server: { baseDir: "dist" } });

  watch("src/scss/**/*.scss", scssTask);
  watch("src/js/**/*.js", series(jsTask));
  watch(["src/pages/**/*.html", "src/partials/**/*.html"], htmlTask);

  watch(
    "src/assets/**/*",
    series(assetsTask, function reload(done) {
      browserSync.reload();
      done();
    })
  );
}

exports.default = series(htmlTask, scssTask, jsTask, assetsTask, serve);
exports.build = series(htmlTask, scssTask, jsTask, assetsTask);
