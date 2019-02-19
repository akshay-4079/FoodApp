export class CurrentUser{
    constructor(
    public Name:string='',
    public CurrRest:string='',
    public Order:[]=[],
    public Bill:number=null
    ){}
}