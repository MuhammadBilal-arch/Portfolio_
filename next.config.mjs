import CopyPlugin from 'copy-webpack-plugin';

export default {
  reactStrictMode: false,
  images: {
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    serverActions: true,
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/videos/', 
          publicPath: '/_next/static/videos/', 
        },
      },
    });

    // Add a plugin to copy static files
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          { from: 'public/assets/video', to: 'static/videos' }, // Copy video files from public directory to output
        ],
      })
    );

    return config;
  },
};
