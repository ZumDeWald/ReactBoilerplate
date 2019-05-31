module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    //Allows load and test of CSS files in Node with Jest
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  //after Jest is loaded
  setupFilesAfterEnv: [require.resolve('./test/setup-tests.js')],
  collectCoverageFrom: ['**/src/**/*.js'],
};
