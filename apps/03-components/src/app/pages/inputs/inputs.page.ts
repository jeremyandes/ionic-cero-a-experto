import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
    this.listenFormChanges();
  }

  getControlValue(control: string): string { return this.form.get(control).value; }

  private listenFormChanges() {
    this.form.valueChanges.subscribe(() => {
      console.log(this.form);
    });
  }

  private createForm() {
    this.form = this.fb.group({
      name: ['Jeremy', Validators.required],
      lastName: ['Andes', Validators.required],
    });
  }
}
