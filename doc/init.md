1. инициация репозитория

```sh
git init
```

Создаем gitignore

```
touch .gitignore
```

Добавляем в игнор node_modules

```sh
node_modules/
```

2. инициируем npm

```sh
npm init -y
```

3. Устанавливаем Jest

```
npm install jest @types/jest -D
```

Инициируем и настраиваем jest

```sh
npx jest --init
```

Добавляем jest - babel

```
npm i --dev babel-jest @babel/core @babel/core @babel/preset-env
```

4. Устанавливаем Eslint

```
npm i eslint -D
npx eslint --init
```

5. Устанавливаем Prettier

```
npm i prettier -D
```

Ставим eslint-config-prettier

```sh
npm eslint-config-prettier -D
```

Добавляем в package.json алиасы команд

```json
    "lint": "prettier --check . && eslint .",
    "lint:fix": "prettier --write . && eslint . --fix",
```

6. Устанавливаем Husky и lint-staged

```
npx mrm lint-staged
```

7. Активируем проверки на CI\CD

```sh
mkdir -p .github/workflows
```

Устанавливаем workflow GHA-Yaml

```sh
wget https://raw.githubusercontent.com/otus-js-student/js--game-of-life/master/.github/workflows/sanity-check.yml -o .github/workflows/sanity-check.yml
```

8. Устанавливаем плагин для работы с CSS

```
npm install --save-dev style-loader css-loader
```

<pre>webpack.config.js</pre>

```js
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
```

9. Устанавливаем плагин для работы с картинками по URL

```
npm install --save-dev url-loader
```

<pre>webpack.config.js</pre>

```js
      {
        test: /\.png/,
        use: {
          loader: 'url-loader',
        },
      },
```

10. Настраиваем HtmlWebpackPlugin для множества страниц

11. Ставим sass-loader node-sass mini-css-extract-plugin --save-dev
    npm i css-loader sass-loader node-sass mini-css-extract-plugin --save-dev

```js
{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      }

```

12. Ставим stylelint

```sh
npm install --save-dev  stylelint stylelint-config-prettier stylelint-config-standard stylelint-scss
```

.stylelintrc.json

```javascript
{
  "extends": ["stylelint-config-standard", "stylelint-config-prettier"],
  "plugins": ["stylelint-scss"],
  "rules": {}
}
```

package.json

```javascript

  "lint": "prettier --check . && eslint . && stylelint \"**/*.scss\"",
  "lint:fix": "prettier --write . && eslint . --fix && stylelint \"**/*.scss\" --fix",

    ---
  "*.{css,md,yml}": "prettier --write",
    "*.css": "stylelint --fix"
```
