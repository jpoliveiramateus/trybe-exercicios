const service = require('./service');

it('Test function randomNumber', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
})

it('Test new function randomNumber', () => {
  service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

  expect(service.randomNumber(5, 2)).toBe(2.5);
  expect(service.randomNumber).toHaveBeenCalled();
})

it('Test new function2 randomNumber', () => {
  service.randomNumber = jest.spyOn(service, "randomNumber").mockImplementation((a, b, c) => a * b * c);

  expect(service.randomNumber(2, 2, 2)).toBe(8);
  expect(service.randomNumber).toHaveBeenCalled();
  
  service.randomNumber.mockRestore();
  service.randomNumber = jest.fn().mockImplementation((a) => a * 2);

  expect(service.randomNumber(2)).toBe(4);
  expect(service.randomNumber(14)).toBe(28);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(2);
})

it('Returns string in lowercase', () => {
  service.wordCapsLock = jest.spyOn(service, "wordCapsLock");
  service.wordCapsLock('test');
  expect(service.wordCapsLock).toHaveBeenCalled();

  service.wordCapsLock = jest.spyOn(service, "wordCapsLock").mockImplementation((word) => word.toLowerCase());
  expect(service.wordCapsLock('OLA')).toBe('ola');
});

it('Return last letter of string', () => {
  service.firstLetter = jest.spyOn(service, "firstLetter");

  expect(service.firstLetter('test')).toBe('t');
  expect(service.firstLetter).toHaveBeenCalled();


  service.firstLetter = jest.spyOn(service, "firstLetter")
    .mockImplementation((word) => word.substring(word.length - 1));

  expect(service.firstLetter('uva')).toBe('a');
  expect(service.firstLetter('morango')).toBe('o');
});

it('Concat three strings', () => {
  expect(service.concatWords('ola', 'test')).toBe('olatest');

  service.concatWords = jest.spyOn(service, "concatWords")
  .mockImplementation((a, b, c) =>  a + b + c);
  
  expect(service.concatWords('uva', 'melancia', 'copo')).toBe('uvamelanciacopo');
  expect(service.concatWords('morango', 'fone', 'tv')).toBe('morangofonetv');
});

it('Reset first function', () => {
  service.wordCapsLock.mockRestore();

  expect(service.wordCapsLock('TEST')).toBe('TEST');
  expect(service.wordCapsLock('olamundo')).toBe('OLAMUNDO');
});

describe('Test fetch dog api', () => {
  service.fetchApiDog = jest.fn();
  afterEach(service.fetchApiDog.mockReset);

  it('Request success', async () => {
    service.fetchApiDog.mockResolvedValue("request success");
    service.fetchApiDog();

    expect(service.fetchApiDog).toHaveBeenCalled();
    await expect(service.fetchApiDog()).resolves.toBe("request success");
    expect(service.fetchApiDog).toHaveBeenCalledTimes(2);
  });

  it('Request failed', async () => {
    service.fetchApiDog.mockRejectedValue("request failed");

    await expect(service.fetchApiDog()).rejects.toBe("request failed");
    expect(service.fetchApiDog).toHaveBeenCalled();
    expect(service.fetchApiDog).toHaveBeenCalledTimes(1);
  });

  // test("testando requisição caso a promise seja rejeitada", async () => {
  //   service.fetchApiDog.mockRejectedValue("request failed");

  //   expect(service.fetchApiDog).toHaveBeenCalledTimes(0);
  //   await expect(service.fetchApiDog()).rejects.toMatch("request failed");
  //   expect(service.fetchApiDog).toHaveBeenCalledTimes(1);
  // });
});
