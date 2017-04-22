import Person from './person';

test('Person.intro', () => {
  const testPerson = new Person('text');
  expect(testPerson.intro()).toBe('i am text by name');
});
