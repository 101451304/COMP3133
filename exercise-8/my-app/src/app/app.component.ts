import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveSpacesPipe } from './remove-spaces.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RemoveSpacesPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  heros = [
    { id: 18, name: 'The-Flash' },
    { id: 19, name: 'Green-Lantern' }
  ];
}
