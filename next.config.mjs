import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';

export default {
  // Your Next.js configuration options here
  webpack(config, { isServer }) {
    // Add a rule to handle video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/videos/', // Output path for videos
          publicPath: '/_next/static/videos/', // Public path for videos
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
