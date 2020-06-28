import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2020-04-22 para 22/04/2020', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2020-04-22')).toEqual('22/04/2020');
  });
});
