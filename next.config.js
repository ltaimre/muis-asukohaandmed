module.exports = {


    env: {
        //pages


    },
    webpack: (config, {dev}) => {
        config.module.rules.push(
        /*    {
                test: /\.(css|scss)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            },
            {
                test: /\.css$/,
                loader: 'babel-loader!raw-loader'
            },
            {
                test: /\.scss$/,
                loader: 'babel-loader!raw-loader!sass-loader'
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }*/
        )
        return config
    }
}
