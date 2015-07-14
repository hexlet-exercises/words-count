install:
	npm install

test: lint mocha

lint:
	./node_modules/gulp/bin/gulp.js lint

mocha:
	./node_modules/mocha/bin/mocha

.PHONY: install
