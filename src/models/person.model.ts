export class Person {

  constructor (
    private name: string,
    private age: number,
    private single: boolean = false
  ) {}

  public getName(): string{
    return this.name;
  }

  public sumAge(sum: number): void{
    this.age+= sum;
  }

  private setName(){
    this.name = 'nicolasssss';
  }
}