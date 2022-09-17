import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

   respuesta:any;
   public form!: FormGroup;

  constructor( private route:ActivatedRoute, private apis:ApiService, private fb:FormBuilder) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
     (paramMap:any) => { const {params}=paramMap
      this.loadData(params.variable);
      console.log(params.variable)
      }
    )

    this.form = this.fb.group({
      description: '',
    });
  }

  loadData(id:string){
    this.apis.get('http://localhost:3000/crud/read/'+id)
    .subscribe(
      re => { this.respuesta = re; console.log(this.respuesta)}
    )

  }

  public enviarData(){
    this.apis.post('http://localhost:3000/comments/create/', this.form.value).subscribe(response => {
      console.log('comentario enviado');
      this.form.reset();

    })
  }

}
