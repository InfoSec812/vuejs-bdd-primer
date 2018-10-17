module.exports = {
  moduleFileExtensions: ["js", "vue"],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.{vue}"],
  coverageDirectory: "<rootDir>/coverage",
  coverageReporters: ["json", "lcov", "text", "html"],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },
  moduleNameMapper: {
    "^vue$": "vue/dist/vue.common.js",
    "^@/(.*)$": "<rootDir>/src/$1",
    quasar: "quasar-framework/dist/umd/quasar.mat.umd.min.js"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter", {
        pageTitle: "Test Report",
        includeFailureMsg: true,
        includeConsoleLog: true,
        theme: "darkTheme"
      }
    ]
  ],
  testMatch: ["**/*.steps.js"]
};
