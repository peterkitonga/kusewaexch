<div align="center">
<h1>Kusewa Exch</h1>
<p>This project was created as a platform for drawing names for my family's secret santa gift exchange.</p>
</div>

## Features

- [TypeScript](https://www.typescriptlang.org/) - For type safety and other awesome features not native to vanilla JavaScript.
- [SASS](https://sass-lang.com/) - CSS extension language for CSS nesting, mixins, variables, modules and inheritance.
- [BEM Methodology](http://getbem.com/) - Methodology for naming and organizing CSS selectors and HTML elements.
- [Vuex](https://vuex.vuejs.org/) - Vue.js library for state management.

## Design Resources

- View the style guide [here](https://xd.adobe.com/view/3f918faa-ef8d-4489-a81e-9423f1c4f47e-6ac2/)
- View the prototype design [here](https://xd.adobe.com/view/f2a05b82-b2dd-4287-b51e-bdc055fab5d5-a7f3/)

Note: Images used in the project and designs are not my own.

## Environment Variables

To run the project, first copy the example variables into a `.env.[mode].local` file with command: `cp .env.example .env.[mode].local`. The modes available are [documented here](https://cli.vuejs.org/guide/mode-and-env.html#modes). You will then need to modify the following environment variables in the `.env.[mode].local` file for the frontend to run:

- `VUE_APP_NAME` - Name of the application

- `VUE_APP_URI` - URI for the application

- `VUE_APP_API_URI` - URI for the REST API(randomuser.me already preselected)

## Run Locally(development mode)

Clone the project

```bash
  git clone https://github.com/peterkitonga/kusewaexch
```

Go to the project directory

```bash
  cd kusewaexch
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run serve
```

## Deployment(production mode)

Install dependencies first

```bash
  npm install
```

To deploy this project run

```bash
  npm run build
```

## Running Tests

Tests are written in Mocha, Chai under the `tests` directory and uses `istanbul` for coverage reports. To run tests, run the following command

```bash
  npm run test:unit
```

To run and view coverage reports for the tests, you will need to run two scripts in sequential order

```bash
  npm run test:coverage ; npm run test:view
```

## Linting

Linting is configured with eslint and prettier. You are free to configure it to your liking using the configuration file `.eslintrc.js`.

To check for and fix linting errors, run

```bash
  npm run lint
```

## Further Customization

See [configuration reference here](https://cli.vuejs.org/config/) for further customization

## Authors

[Peter Kitonga](https://www.github.com/peterkitonga)
