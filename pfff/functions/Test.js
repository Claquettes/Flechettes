function test(val) {
    return val * ((val % 2 === 0) ? 2 : 1);
}

module.exports = {
    test: test
}