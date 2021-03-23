// test place
import * as data from './carousel';

test('check initial state', () => {
  const f = new data.StateSlider(1);
  expect(f.currentIndex).toBe(0);
});

test('check next image state', () => {
  const f = new data.StateSlider(3);

  f.nextImage();
  expect(f.currentIndex).toBe(1);

  f.nextImage();
  expect(f.currentIndex).toBe(2);
});

test('check next image over state', () => {
  const f = new data.StateSlider(3);
  f.nextImage();
  f.nextImage();
  f.nextImage();
  f.nextImage();
  f.nextImage();
  expect(f.currentIndex).toBe(2);
});

test('check next image over state set zero with overflow', () => {
  const f = new data.StateSlider(3);
  f.nextImage();
  f.nextImage();
  f.nextImage();

  expect(f.currentIndex).toBe(0);
});

test('check prev image over state', () => {
  const f = new data.StateSlider(3);

  f.prevImage();
  expect(f.currentIndex).toBe(2);
});

test('check multi prev image over state', () => {
  const f = new data.StateSlider(3);

  f.prevImage();
  f.prevImage();
  f.prevImage();
  f.prevImage();
  expect(f.currentIndex).toBe(2);
});

test('check multi prev image over state', () => {
  const f = new data.StateSlider(3);
  f.currentIndex = 0;

  f.prevImage();
  expect(f.currentIndex).toBe(2);
});

test('stop rotate', () => {
  jest.useFakeTimers();
  const f = new data.StateSlider(3);
  f.rotator = 0;
  f.disableRotation();
  expect(clearInterval).toHaveBeenCalledWith(expect.any(Number));
});
