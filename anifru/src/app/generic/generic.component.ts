import { Component } from '@angular/core';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {ù
  
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);
    }
  getRouterParam = (params: ParamMap) =>
    {
      let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
      console.log (uri_param); //Stampo su console
      //this.service.getTrack()
    }
  
}
