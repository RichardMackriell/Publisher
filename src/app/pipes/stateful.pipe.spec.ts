import { StatefulPipe } from './stateful.pipe';

describe('StatefulPipe', () => {
  it('create an instance', () => {
    const pipe = new StatefulPipe();
    expect(pipe).toBeTruthy();
  });
});
