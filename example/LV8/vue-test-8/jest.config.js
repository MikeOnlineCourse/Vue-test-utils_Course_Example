module.exports = {
    preset: "@vue/cli-plugin-unit-jest",
    testMatch: ["**/src/**/*.spec.[jt]s?(x)"],
    transform: {
      "^.+\\.js$": "babel-jest",
      "^.+\\.vue$": "@vue/vue3-jest"
    },
  };