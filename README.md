# fakerapi-playwright-automation

This is a personal project to use Playwright to automate the API `end points` in https://fakerapi.it/en

## Playwright API capabilities
https://playwright.dev/docs/api-testing

## API End Point
The `base end point` is defined by the variable `baseURL` defined in `playwright.config.ts` like:
`baseURL: 'https://fakerapi.it/en'`

# Getting started
1. Clone repository
2. Install dependencies using the command
	```js
	npm i
	```
3. Install playwright dependencies
	```js
	npx playwright install
	```
4. To run test use below command or check other scripts in [package.json](./package.json)
	```js
	npm run test
	```

# Note:  
See comments in `tests` and `resources` files for the new features to come (mostly `refactoring` the current tests)
