test:
	@NODE_ENV=test  ./node_modules/.bin/mocha lib/*/test/*.js -R spec -t 30000

test-coveralls:
	@NODE_ENV=test  ./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/_mocha lib/*/test/*.js -x lib/*/test/* --report lcovonly -- -R spec -t 30000

.PHONY: test