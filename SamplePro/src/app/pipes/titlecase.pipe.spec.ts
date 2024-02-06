import { TitlecasePipe } from "./titlecase.pipe";

describe('TitlecasePipe', () => {
  it('create an instance', () => {
    const pipe = new TitlecasePipe();
    expect(pipe).toBeTruthy();
  });
});
describe('TitlecasePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new TitlecasePipe();

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });

  it('transforms "abc def" to "Abc Def"', () => {
    expect(pipe.transform('abc def')).toBe('Abc Def');
  });

});