import { Component, OnInit ,Input } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthorsService } from '../authors.service';
import { Author } from '../authors';
import { Http , Response , Headers , RequestOptions }  from '@angular/http';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() one:Author;
  headers: Headers;
  options: RequestOptions;
  authorEditForm: FormGroup;

  constructor(private fb: FormBuilder,private authorsService: AuthorsService) {
    // this.headers = new Headers({ 'Content-Type' : 'Aplication-json'});
    // this.options = new RequestOptions({ headers: headers })
   }

  ngOnChanges()
  {
    this.authorEditForm = this.fb.group({
      id: [this.one ? this.one.id : null,Validators.required],
      name: [this.one ? this.one.name : null,Validators.required],
      email: [this.one ? this.one.email : null,[Validators.required,Validators.email]]
    })
  }

  ngOnInit() {

  }

  private save():any {
    let data = new FormData();
    data.append('name', this.authorEditForm.get('name').value);
    data.append('email', this.authorEditForm.get('email').value);
    return data;
  }

  onSubmit = function() {
    const value = this.save();
    const id = this.authorEditForm.get('id').value;
    console.log(id);
    this.authorsService.editAuthor(value,id).subscribe(res => console.log(res.json()));
    this.authorEditForm.reset();
  }

}
