export class Navigation {
  constructor(
    private currentIndex = 1,
    private readonly minPage = 1,
    private readonly maxPage = 3,
  ) { }

  back(): void {
    if (this.currentIndex === this.minPage) {
      return;
    }

    this.currentIndex -= 1;
  }

  next(): void {
    if (this.currentIndex === this.maxPage) {
      return;
    }

    this.currentIndex += 1;
  }

  getCurrentIndex(): number {
    return this.currentIndex;
  }

  isInitialPage(): boolean {
    return this.currentIndex === this.minPage;
  }

  isLastPage(): boolean {
    return this.currentIndex === this.maxPage;
  }
}
