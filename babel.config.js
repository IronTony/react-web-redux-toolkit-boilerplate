module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
