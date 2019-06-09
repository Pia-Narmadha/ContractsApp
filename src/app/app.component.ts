import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contractsApp';

  contracts = {};

  constructor(private http: HttpClient){}
  ngOnInit() {

    this.http.get("https://localhost:4200/api/contracts")
      .subscribe((data: String) => {
        console.log("get worked:",data);
        this.contracts = data;
      });
      
      console.log("contracts:",this.contracts);
    }

}
