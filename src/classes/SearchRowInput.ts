import type ISearchRowInput from "../interfaces/ISearchRowInput";

export default class SearchRowInput implements ISearchRowInput {
  public execute(): void {
    this.rowInputOrchestrator();
  }

  private rowInputOrchestrator(): void {
    const rowInput: HTMLTextAreaElement = this.collectSearchRowInput();
    this.rowInputEvents(rowInput);

    const btn = this.getClearBtn();
    this.clearBtnFactory(btn, rowInput);
  }

  private collectSearchRowInput(): HTMLTextAreaElement {
    return document.querySelector("#search")!;
  }

  private rowInputEvents(rowInput: HTMLTextAreaElement): void {
    rowInput.oninput = (e) => {
      const event = e.target as HTMLTextAreaElement;

      this.rowInputWidthManager(event);
      this.showOrHideClearBtn(event);
    };
  }

  private rowInputWidthManager(e: HTMLTextAreaElement) {
    this.addOrRemoveLinesFromSearchInput(e);
  }

  private addOrRemoveLinesFromSearchInput(e: HTMLTextAreaElement): void {
    e.rows = 1;
    const lines = Math.ceil(e.scrollHeight / 20);

    if (e.scrollHeight / 20 < 2) {
      e.rows = 1;
      return;
    }
    //A textarea possuirá no máximo 10 linhas
    e.rows = lines >= 10 ? 10 : lines;
  }

  private showOrHideClearBtn(e: HTMLTextAreaElement) {
    const clearBtnItems = this.getClearBtnContainers();

    clearBtnItems.forEach((item) => {
      item.style.display = e.value === "" ? "none" : "flex";
    });
  }

  private getClearBtn(): HTMLButtonElement {
    return document.querySelector("#clear-btn")!;
  }

  private clearBtnFactory(
    btn: HTMLButtonElement,
    rowInput: HTMLTextAreaElement
  ): void {
    btn.onclick = () => {
      rowInput.value = "";
      this.showOrHideClearBtn(rowInput);
      rowInput.focus();
    };
  }

  private getClearBtnContainers(): NodeListOf<HTMLDivElement> {
    return document.querySelectorAll(".clear-textarea-container")!;
  }
}
