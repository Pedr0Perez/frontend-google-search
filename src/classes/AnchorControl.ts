import type IAnchorControl from "../interfaces/IAnchorControl";

export default class AnchorControl implements IAnchorControl {
  public execute(): void {
    this.disableAllAnchor();
  }

  private disableAllAnchor(): void {
    const anchorList: NodeListOf<HTMLAnchorElement> = this.collectAllAnchor();

    anchorList.forEach((item) => {
      item.onclick = (e) => {
        e.preventDefault();
      };
    });
  }

  private collectAllAnchor(): NodeListOf<HTMLAnchorElement> {
    return document.querySelectorAll("a");
  }
}
