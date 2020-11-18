import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.css']
})
export class RecipeEditorComponent implements OnInit {

id: number;
editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(
      (x: Params) => {this.id = +x['id' ];
      this.editMode = x['id'] != null;}
    )
  }

}
