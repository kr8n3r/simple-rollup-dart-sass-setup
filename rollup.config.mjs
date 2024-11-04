import styles from "rollup-plugin-styler";

const paths = {
  src: 'src/',
  dist: 'dist/',
  npm: 'node_modules/',
  govuk_frontend: 'node_modules/govuk-frontend/dist/'
};

export default [{
    input: paths.src + 'stylesheets/main.scss',
    output: {
      dir: paths.dist + 'stylesheets/',
      assetFileNames: "[name][extname]",
    },
    plugins: [
      // https://anidetrix.github.io/rollup-plugin-styles/interfaces/types.Options.html
      styles({
        mode: "extract",
        sass: {
          includePaths: [
            paths.govuk_frontend,
            paths.npm
          ],
          quietDeps: true
        },
        minimize: true,
        url: false,
        sourceMap: true,
      }),
    ]
}]