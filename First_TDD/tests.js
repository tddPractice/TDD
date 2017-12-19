QUnit.test('1일 때 별 1개', function(assert){
  assert.equal(print(1), '★', '통과');
});

QUnit.test('2일 때 별 2개', function(assert){
  assert.equal(print(2), '★★', '통과');
});

QUnit.test('3일 때 별 3개', function(assert){
  assert.equal(print(3), '★★★', '통과');
});

QUnit.test('4일 때 별 4개', function(assert){
  assert.equal(print(4), '★★★★', '통과');
});

QUnit.test('5일 때 별 5개', function(assert){
  assert.equal(print(5), '★★★★★', '통과');
});
