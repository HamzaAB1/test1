import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})
export class MeteoComponent implements OnInit{

  meteoData: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.generateDataMars();
  }

  generateDataMars() {
    this.dataService.getMarsData().subscribe(
      (data: any) => {
        this.meteoData = data;
        console.log(this.meteoData);
      }
    )
  }

}
