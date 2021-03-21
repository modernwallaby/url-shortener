import { getShortenedUrl } from '../shortener';

describe('shortener service', () => {
  it('should shorten a url consistently', () => {
    const original = 'http://example.com';
    const expected = 'd701deac';
    expect(getShortenedUrl(original)).toEqual(expected);
  });
});
