install:
	npm ci

lint:
	npx eslint .

fix-lint:
	npx eslint --fix .

run:
	node bin/gendiff __fixtures__/file.1json __fixtures__/file2.json

test:
	npm test

test-coverage:
	npx jest --coverage
