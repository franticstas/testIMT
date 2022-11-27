import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-code',
  templateUrl: './form-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCodeComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  @Input()
  email: string = '';

  @Output()
  emitCodeSend = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      code: [null, Validators.required],
    });
  }

  submit(): void {
    if (!this.form.valid) {
      return;
    }

    this.emitCodeSend.emit();
  }
}
