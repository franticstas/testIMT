import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegexpService } from 'src/app/shared/services/static-data/regexp.service';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAuthComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  @Output()
  emitFormSend = new EventEmitter<string>();

  constructor(private fb: FormBuilder, private regexpService: RegexpService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(this.regexpService.EMAIL_REGEXP),
        ],
      ],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, Validators.required],
    });
  }

  private comparePassword(password: string, confirmPassword: string): void {
    if (password !== confirmPassword) {
      this.form.controls['confirmPassword'].setErrors({
        passwordNotMatch: true,
      });
    }
  }

  submit(): void {
    this.comparePassword(
      this.form.get('password')?.value,
      this.form.get('confirmPassword')?.value
    );

    if (!this.form.valid) {
      return;
    }

    const email = this.form.get('email')?.value;

    this.emitFormSend.emit(email);
  }
}
