import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-flip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-flip.component.html',
  styleUrls: ['./book-flip.component.scss']
})
export class BookFlipComponent {
  pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4', 'Page 5'];
  currentSpread = 0; // Each spread shows two pages
  flipping = false;
  flipDirection: 'next' | 'prev' | null = null;

  get leftPageIndex() {
    return this.currentSpread * 2;
  }
  get rightPageIndex() {
    return this.currentSpread * 2 + 1;
  }

  nextPage() {
    if (this.rightPageIndex < this.pages.length - 1 && !this.flipping) {
      this.flipping = true;
      this.flipDirection = 'next';
      setTimeout(() => {
        this.currentSpread++;
        this.flipping = false;
        this.flipDirection = null;
      }, 850);
    }
  }

  previousPage() {
    if (this.leftPageIndex > 0 && !this.flipping) {
      this.flipping = true;
      this.flipDirection = 'prev';
      setTimeout(() => {
        this.currentSpread--;
        this.flipping = false;
        this.flipDirection = null;
      }, 850);
    }
  }

  getPageClass(side: 'left' | 'right') {
    if (!this.flipping) return '';
    if (this.flipDirection === 'next' && side === 'right') return 'flip-next';
    if (this.flipDirection === 'prev' && side === 'left') return 'flip-prev';
    return '';
  }
}
