import type IAnchorControl from "../interfaces/IAnchorControl";
import type ISearchRowInput from "../interfaces/ISearchRowInput";

export default class Program {
  private readonly anchorControl: IAnchorControl;
  private readonly searchRowInput: ISearchRowInput;

  constructor(anchorControl: IAnchorControl, searchRowInput: ISearchRowInput) {
    this.anchorControl = anchorControl;
    this.searchRowInput = searchRowInput;
  }

  public execute(): void {
    this.anchorControl.execute();
    this.searchRowInput.execute();
  }
}
