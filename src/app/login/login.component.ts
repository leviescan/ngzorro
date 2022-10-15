import { FormatPainterFill } from './../../../node_modules/@ant-design/icons-angular/src/icons/fill/FormatPainterFill';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide:boolean=true;
  public form!: FormGroup;
  public form1!: FormGroup;

  constructor( private fb:FormBuilder) {
    this.form = this.fb.group({
      email: ["",[Validators.required,Validators.email]],
      password:["",[Validators.required, Validators.minLength(7)]],
      show:["",[Validators.required, Validators.requiredTrue]]

    });

    this.form1 = this.fb.group({
      emai: ["",[Validators.required,Validators.email]],
      passwor:["",[Validators.required, Validators.minLength(7)]],
      sho:["",[Validators.required, Validators.requiredTrue]]

    });
  }

  ngOnInit(): void {

    this.loadApi();
  }

  loadApi(){
    const respon = {
      email:'andres@hmail.com',
      password:'1234567',
      show: true
    };

    this.form.patchValue({
      email:respon.email,
      password:respon.password,
      show:respon.show,
    })
  }

  submit(){
    console.log(this.form.value);
  }

  submit1(){
    console.log(this.form1.value);
  }

}
