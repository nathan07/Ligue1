import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'squads-page',
    templateUrl: 'squadsPage.html'
})
export class SquadsPage {
    teams: string;
    error: string;

    constructor(
        public navCtrl: NavController,
        public http: HttpClient
    ) {
        this.error = '';
    }

    ionViewWillEnter() {
        // Load the data
        this.prepareDataRequest()
          .subscribe(
            data => {
              // Set the data to display in the template
              this.teams = JSON.stringify(data);

            },
            err => {
              // Set the error information to display in the template
              this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
            }
          );
      }

    private prepareDataRequest(): Observable<object> {
        // Define the data URL
        const dataUrl = 'https://api.football-data.org/v2/competitions/FL1/teams';
        // Prepare the request
        const head = new HttpHeaders().set("X-Auth-Token", "b1576f16b46c42629d19d42e71c29029");
        return this.http.get(dataUrl, {headers: head});
      }
}
