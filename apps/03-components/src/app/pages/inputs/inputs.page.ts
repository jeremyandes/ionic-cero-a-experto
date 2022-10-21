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

  onSubmit(): void {
    if (this.form.invalid) { return; }

    console.log('Submited form!', this.form);
  }

  private listenFormChanges() {
    this.form.valueChanges.subscribe(() => {
      console.log(this.form.valid);
    });
  }

  private createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      number: ['', [Validators.required]]
    });
  }
}
