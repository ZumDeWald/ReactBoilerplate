const isProd = String(process.env.NODE_ENV) === 'production';
const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {modules: isTest ? 'commonjs' : false, targets: {node: 'current'}},
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    'react-hot-loader/babel',
  ],
};
