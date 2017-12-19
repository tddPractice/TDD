/**
 * 단어의 개수 세기
 * 요구사항: 띄어쓰기를 기준으로 몇 개의 단어가 있는지 판별하는 로직 작성
 * 조건: 문장의 길이는 1,000,000미만으로.
 * 조건2: split() 사용 금지
 */
QUnit.test('단어가 n개일 때 n을 출력', function(assert){
    //assert.equal(countWords('apple'), 1, 'ok');
    //assert.equal(countWords('price'), 1, 'ok');
    //  assert.equal(countWords('I am'), 2, 'ok');
    //assert.equal(countWords('I am a'), 3, 'ok');
    assert.equal(countWords('  I  a m a   b o y  '), 7, 'ok');
    assert.equal(countWords('I am a boy'), 4, 'ok');
    assert.equal(countWords('4 tests completed in 6 milliseconds, with 0 failed, 0 skipped, and 0 todo.'), 14, 'ok');
});
