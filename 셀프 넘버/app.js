QUnit.test('d(n)은 n + n의 1의자리 + n의 10의자리 + ... + n의 (n*10^n-1)자리', function(assert){
    assert.equal(d(1), 2, 'ok');
    assert.equal(d(2), 4, 'ok');
    assert.equal(d(3), 6, 'ok');
    assert.equal(d(4), 8, 'ok');
    assert.equal(d(5), 10, 'ok');
    assert.equal(d(6), 12, 'ok');
    assert.equal(d(7), 14, 'ok');
    assert.equal(d(8), 16, 'ok');
    assert.equal(d(9), 18, 'ok');
    assert.equal(d(10), 11, 'ok');
    assert.equal(d(11), 13, 'ok');
    assert.equal(d(12), 15, 'ok');
    assert.equal(d(13), 17, 'ok');
    assert.equal(d(14), 19, 'ok');
    assert.equal(d(15), 21, 'ok');
    assert.equal(d(16), 23, 'ok');
    assert.equal(d(17), 25, 'ok');
    assert.equal(d(18), 27, 'ok');
    assert.equal(d(20), 22, 'ok');
    assert.equal(d(25), 32, 'ok');
    assert.equal(d(32), 37, 'ok');
    assert.equal(d(37), 47, 'ok');
    assert.equal(d(40), 44, 'ok');
    assert.equal(d(38), 49, 'ok');
    assert.equal(d(23), 28, 'ok');
    assert.equal(d(77), 91, 'ok');
    assert.equal(d(99), 117, 'ok');
    assert.equal(d(101), 103, 'ok');
    assert.equal(d(123), 129, 'ok');
    assert.equal(d(246), 258, 'ok');
    assert.equal(d(852), 867, 'ok');
    assert.equal(d(798), 822, 'ok');
})
