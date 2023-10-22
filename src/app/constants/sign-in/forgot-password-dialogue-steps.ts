export const dialogueSteps = {
  email: {
    header: $localize`What is your email address?` as string,
    description:
      $localize`We will send an email containing a code to the email address associated with your account.` as string,
    secondaryButtonText: $localize`Cancel` as string,
    primaryButtonText: $localize`Send` as string,
    label: $localize`Email` as string,
    placeholder: $localize`Type your email` as string,
    type: $localize`email` as string,
  },
  code: {
    header: $localize`Check your email` as string,
    description: $localize`Enter the 6-digit code sent to your email address.` as string,
    secondaryButtonText: $localize`Cancel` as string,
    primaryButtonText: $localize`Submit` as string,
    label: $localize`Code` as string,
    placeholder: $localize`Type your code` as string,
    type: $localize`text` as string,
  },
  newPassword: {
    header: $localize`Change your password` as string,
    description: $localize`Enter your new password.` as string,
    secondaryButtonText: $localize`Cancel` as string,
    primaryButtonText: $localize`Change` as string,
    label: $localize`New password` as string,
    placeholder: $localize`Type your new password` as string,
    type: $localize`password` as string,
  },
};
