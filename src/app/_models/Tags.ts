export class Tag{
  static  readonly  ANGULAR = new Tag('Angular', 'red')
  static  readonly  TYPSCRIPT = new Tag('TypScript', 'darkred')
  static  readonly  PYTHON = new Tag('Python', 'pink')
  static  readonly  Java = new Tag('Java', 'orange')
  static  readonly  JAVASCRIPT = new Tag('JavaScript', 'purple')
  static  readonly  NODEJS = new Tag('Node.JS', 'brown')

  private constructor(private readonly  key:string,public readonly  color:string) {
  }
  toString(){
    return this.key;
  }
}
