const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },


    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },

            {
                test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
                use: ['style-loader', 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',

            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource', // використовуємо Asset Modules для обробки файлів
                generator: {
                    filename: 'assets/fonts/[name][hash][ext][query]' // шлях для збереження шрифтів
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,  // Використовуємо MiniCssExtractPlugin для витягування CSS
                    'css-loader',  // Обробка CSS
                    'postcss-loader',
                    {
                        loader: 'sass-loader',  // Перетворення SCSS в CSS
                        options: {
                            additionalData: (content, loaderContext) => {
                                return content.replace(/\/\/[^\n]*/g, ''); // Видаляє коментарі в SCSS
                            }
                        }
                    },


                ],
            }




        ],
    },
    resolve: {
        alias: {
            jquery: 'jquery',  // Це необхідно для правильної роботи jQuery в інших плагінах
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/images',
                    to: './images',
                    globOptions: {
                        ignore: ['*.DS_Store'],
                    },
                    noErrorOnMissing: true,
                },
            ],
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css'
        })

    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Каталог для статики
        },
        open: true, // Автоматически открывать браузер
    },

    mode: 'development', // Режим сборки
};