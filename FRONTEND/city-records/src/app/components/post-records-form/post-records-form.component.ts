import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup } from '@angular/forms'
import { RecordsService } from 'src/app/core/services/records.service'

@Component({
  selector: 'app-post-records-form',
  templateUrl: './post-records-form.component.html',
  styleUrls: ['./post-records-form.component.scss']
})
export class PostRecordsForm implements OnInit {
  createRecordFormGroup = new FormGroup({
    artist: new FormControl(''),
    title: new FormControl(''),
    reference: new FormControl(''),
    format: new FormControl('')
  });

  onSubmit () {
    this.RecordsService.createRecord(this.createRecordFormGroup.value)
    console.log(this.createRecordFormGroup.value)
    // en this.profileForm.value tenemos el valor del form para poder
    // manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico,
    // podemos hacerlo con this.profileForm.controls['nombreControl']
  }

  constructor (
    private router : Router,
    private RecordsService: RecordsService
  ) {

  }

  ngOnInit (): void {

  }
}
