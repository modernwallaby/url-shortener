import CRC32 from 'crc-32';

export function getShortenedUrl(url: string) {
  return shortenUrl(url);
}

function shortenUrl(url: string) {
  return (CRC32.str(url) >>> 0).toString(16);
};
