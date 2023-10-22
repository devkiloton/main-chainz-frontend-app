import { formFieldMessages } from '../sign-up/form-field-messages';

export const dialogErrors = {
  requiredPassword: formFieldMessages.requiredPassword,
  requiredEmail: formFieldMessages.requiredEmail,
  requiredCode: $localize`You must enter a code` as string,
  invalidEmail: formFieldMessages.invalidEmail,
  invalidPassword: formFieldMessages.invalidPassword,
};
