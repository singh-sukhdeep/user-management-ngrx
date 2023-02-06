import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormGroup, NgForm, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm: UntypedFormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required]
  });

  // @ViewChild('form') form: NgForm;
  constructor(private formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<CreateUserComponent>) { }

  ngOnInit(): void { }

  get firstName(): UntypedFormControl {
    return this.userForm.get('firstName') as UntypedFormControl;
  }
  get lastName(): UntypedFormControl {
    return this.userForm.get('lastName') as UntypedFormControl;
  }
  get email(): UntypedFormControl {
    return this.userForm.get('email') as UntypedFormControl;
  }
  get phone(): UntypedFormControl {
    return this.userForm.get('phone') as UntypedFormControl;
  }


  submitUserForm(form: FormGroup) {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
      this.userForm.reset();
    }
  }

}
