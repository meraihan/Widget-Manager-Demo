import { Component, OnInit } from '@angular/core';
import { PersonalWidgetService } from '../../app/_services/personal-widget.service';
import { PersonalWidget } from '../personal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personal-widget-update',
  templateUrl: './personal-widget-update.component.html',
  styleUrls: ['./personal-widget-update.component.css']
})
export class PersonalWidgetUpdateComponent implements OnInit {

  id: number;
  personalWidget: PersonalWidget = new PersonalWidget();
  constructor(private personalWidgetService: PersonalWidgetService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.personalWidgetService.getPersonalWidgetById(this.id).subscribe(data => {
      this.personalWidget = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.personalWidgetService.updatePersonalWidget(this.id, this.personalWidget).subscribe( data =>{
      this.goToPersonalWidgetList();
    }
    , error => console.log(error));
  }

  goToPersonalWidgetList(){
    this.router.navigate(['/personal-widget-list']);
  }

  createPersonalWidget(){
    this.router.navigate(['create-personal-widget']);
  }

}
