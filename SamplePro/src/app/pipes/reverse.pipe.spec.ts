
import { ReversePipe } from "./reverse.pipe";

describe('ReversePipe',()=>{
  let pipe: ReversePipe;

  beforeEach(()=> {
    pipe = new ReversePipe();
  });

  it('should create an instance',()=>{
    expect(pipe).toBeTruthy();
  });

  it('should reverse a string',()=> {
    const inputString = 'hello';
    const reverseString = pipe.transform(inputString);
    expect(reverseString).toEqual('olleh');
  });

  it('should handle an empty string',()=> {
    const inputString = '';
    const reverseString = pipe.transform(inputString);
    expect(reverseString).toEqual('');
  })
})
