exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/e2e/test.js'],
  baseUrl: 'http://127.0.0.1:8080/'
};
