import { Component, OnInit } from '@angular/core';
import { Application } from '../entities/application';
import { Router } from '@angular/router';
import { ParamService } from '../param.service';
import { PublicationService } from '../publication.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-mesdemandes',
  templateUrl: './mesdemandes.component.html',
  styleUrls: ['./mesdemandes.component.css']
})
export class MesdemandesComponent implements OnInit {
  userData: any[]
  appliData: Application= new Application();
  post=0;

  constructor(private router: Router, private param: ParamService, private publicationService: PublicationService, private voisinsdisplay: UserserviceService) { }

  ngOnInit() {
    this.publicationService.getApplicationByUser(this.param.getActifUser().id).subscribe(
      data=>{
        this.userData= data.json()
        console.log(this.userData)
      }
    )
  }

  poster(){
    this.post=1;
    this.router.navigate(['mesdemandes/supply'])

  }

}
