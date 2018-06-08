export class Patient {

  public id: number;
  public name: string;
  public surname: string;
  public dateOfBirth: string;
  public sex: string;
  public country: string;
  public state: string;
  constructor(private _id: number,
  private _name: string,
  private _surname: string,
  private _dateOfBirth: string,
  private _sex: string,
  private _country: string,
  private _state: string) { }
 }
