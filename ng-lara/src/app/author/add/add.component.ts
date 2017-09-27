import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthorsService } from '../authors.service';

import { Author } from '../authors';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  authorForm: FormGroup;

  constructor(private authorsService: AuthorsService,private fb: FormBuilder) { }

  ngOnInit() {
    this.authorForm = this.fb.group({
      name: [null,Validators.required],
      email: [null,[Validators.required,Validators.email]]
    })
  }

  private save():any {
    let data = new FormData();
    data.append('name', this.authorForm.get('name').value);
    data.append('email', this.authorForm.get('email').value);
    return data;
  }

  onSubmit = function() {
    const value = this.save();
    this.authorsService.addAuthor(value).subscribe(res => console.log( res.json()));
    this.authorForm.reset();
  }

}
