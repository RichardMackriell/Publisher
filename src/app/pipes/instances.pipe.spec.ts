import { InstancesPipe } from './instances.pipe';

describe('InstancesPipe', () => {
  it('create an instance', () => {
    const pipe = new InstancesPipe();
    expect(pipe).toBeTruthy();
  });
});
