import type { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { STRONG_PASSWORD } from '../regex/strong-password';

export const strongPasswordValidator = (): ValidatorFn => {
  return (control: AbstractControl<string>): ValidationErrors | null => {
    const isStrongPassword = STRONG_PASSWORD.test(control.value);
    const { value } = control;
    return isStrongPassword ? null : { strongPassword: value };
  };
};
