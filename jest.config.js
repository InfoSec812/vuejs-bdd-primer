module.exports = {
  globals: {
    __DEV__: true,
  },
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{vue}'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['json', 'lcov', 'text', 'html'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  setupFiles: [
    './jest-cucumber-config.js',
  ],
  testMatch: ['**/*.steps.js'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
      },
    ],
  ],
  moduleNameMapper: {
    'components/([^\\.]*).vue$': '<rootDir>/src/components/$1.vue',
    '^vue$': 'vue/dist/vue.common.js',
    'src/([^\\.]*).js$': '<rootDir>/src/$1.js',
    'src/([^\\.]*).vue$': '<rootDir>/src/$1.vue',
    'src/(.*)/(.*).vue$': '<rootDir>/src/$1/$2.vue',
    '(.*)/(.*).vue$': '<rootDir>/src/$1/$2.vue',
    quasar: 'quasar-framework/dist/umd/quasar.mat.umd.min.js',
  },
  resolver: null,
  transformIgnorePatterns: [
    'node_modules/core-js',
    'node_modules/babel-runtime',
    'node_modules/lodash',
    'node_modules/vue',
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
};
