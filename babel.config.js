module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
    plugins: [
        [
            'formatjs',
            {
                idInterpolationPattern: '[sha512:contenthash:base64:6]',
                ast: true,
            },
        ],
    ],
};
