install:
	npm install

test: lint mocha

lint:
	gulp lint

mocha:
	./node_modules/mocha/bin/mocha

.PHONY: install
