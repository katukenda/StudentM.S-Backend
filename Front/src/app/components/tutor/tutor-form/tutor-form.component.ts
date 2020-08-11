import { Component, OnInit } from '@angular/core';
import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';

@Component({
  selector: 'app-tutor-form',
  templateUrl: './tutor-form.component.html',
  styleUrls: ['./tutor-form.component.scss']
})
export class TutorFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  }

}
