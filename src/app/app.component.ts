import { Component } from '@angular/core';
import { SpacexService } from './services/spacex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  launches: any[] = [];
  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getLaunches().subscribe(data => {
      this.launches = data;
    });
  }

  filterByYear(year: string) {
    if (year) {
      this.spacexService.getLaunchByYear(year).subscribe(data => {
        this.launches = data;
      });
    } else {
      this.spacexService.getLaunches().subscribe(data => {
        this.launches = data;
      });
    }
  }
}
