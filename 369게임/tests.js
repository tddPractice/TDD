/**
 * 요구사항: 369 게임
 * 규칙 - 놀이법은 1부터 숫자를 하나씩 대면서, 3, 6, 9가 들어가는 숫자는 숫자를 말하는 대신 박수를 쳐야 한다
 * (13의 경우 십!짝!이 아닌 그냥 짝!. 3의 배수는 포함하지 않으며 어느 자리에 있냐와는 상관없다.
 * 즉 29~39까지는 무조건 박수(때때로 박수 2번)다).
 */

QUnit.test('3,6,9를 포함하면 포함 개수만큼 짝', function(assert){
    assert.equal(game(3), '짝', 'ok');
    assert.equal(game(9), '짝', 'ok');
    assert.equal(game(13), '짝', 'ok');
    assert.equal(game(19), '짝', 'ok');
    assert.equal(game(23), '짝', 'ok');
    assert.equal(game(29), '짝', 'ok');
    assert.equal(game(6), '짝', 'ok');
    assert.equal(game(16), '짝', 'ok');
    assert.equal(game(26), '짝', 'ok');
    assert.equal(game(9), '짝', 'ok');
    assert.equal(game(19), '짝', 'ok');
    assert.equal(game(29), '짝', 'ok');
    assert.equal(game(33), '짝짝', 'ok');
    assert.equal(game(133), '짝짝', 'ok');
    assert.equal(game(66), '짝짝', 'ok');
    assert.equal(game(606), '짝짝', 'ok');
    assert.equal(game(99), '짝짝', 'ok');
    assert.equal(game(299), '짝짝', 'ok');
    assert.equal(game(333), '짝짝짝', 'ok');
    assert.equal(game(666), '짝짝짝', 'ok');
    assert.equal(game(999), '짝짝짝', 'ok');
    assert.equal(game(238752593), '짝짝짝', 'ok');
});

QUnit.test('3을 포함하지 않으면 숫자 출력', function(assert){
    assert.equal(game(2), '2', 'ok');
    assert.equal(game(4), '4', 'ok');
    assert.equal(game(7), '7', 'ok');
    assert.equal(game(11), '11', 'ok');
    assert.equal(game(14), '14', 'ok');
    assert.equal(game(22), '22', 'ok');
    assert.equal(game(28), '28', 'ok');
});