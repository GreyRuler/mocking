import getLevel from '../level';
import fetchData from '../http';

jest.mock('../http');

beforeAll(() => {
  jest.resetAllMocks();
});

test('should get information about the level ', () => {
  const response = {
    status: 'ok',
    level: 4,
  };
  fetchData.mockReturnValue(response);

  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: 4');
});

test('should get information about unavailability ', () => {
  const response = {
    status: 'error',
  };
  fetchData.mockReturnValue(response);

  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});
