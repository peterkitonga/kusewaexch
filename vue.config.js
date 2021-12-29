module.exports = {
  css: {
    sourceMap: process.env.NODE_ENV !== "production",
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = process.env.VUE_APP_NAME || "KXCH";

      return args;
    });

    if (process.env.NODE_ENV !== "production") {
      config.module
        .rule("ts")
        .include.add(/src/)
        .end()
        .exclude.add(/node_modules/)
        .end()
        .use("istanbul")
        .loader("istanbul-instrumenter-loader")
        .options({ esModules: true, produceSourceMap: true })
        .before("babel-loader");

      config.output
        .devtoolModuleFilenameTemplate("[absolute-resource-path]")
        .devtoolFallbackModuleFilenameTemplate(
          "[absolute-resource-path]?[hash]"
        );

      config.devtool("eval");
    }
  },
};
