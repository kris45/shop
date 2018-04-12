export class Product {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: string,
    public isAvaliable: boolean,
    public amount: number
  ) {}
}
