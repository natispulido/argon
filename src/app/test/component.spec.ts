//@ts-ignore
import { Componente } from "./component.ts";

describe('its valid',() => {
  let status =false;
  let currentsStatus =Componente.aFunction(status);
  let sum=Componente.suma(5,8);
  it('validate aFunction',()=>{
    expect(currentsStatus).toBe(true)
  })

  it('sum works',()=>{
    expect(sum).toBe(13);
  })

  it('sum works',()=>{
    expect(Componente.suma(0,0)).toBe(0);
  })

  it('sum works',()=>{
    expect(Componente.suma(-1,0)).toBe(-1);
  })
 });
