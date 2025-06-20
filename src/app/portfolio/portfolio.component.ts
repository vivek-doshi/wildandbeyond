import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFlipComponent } from './book-flip.component';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, BookFlipComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  // Placeholder for future logic (e.g., turnjs integration)
}
