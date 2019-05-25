#OTP Angular UI component
##Selector

```bash
<app-svsudo-verify-otp></app-svsudo-verify-otp>
```

##Input Parameters
```bash
title: string -> Title to be shown.
subTitle: string -> subTitle to be shown.
buttonLabel: string - button label
digitsOfOTP: number -> number of OTP fields to be generated example (4 pin or 8 pin).
```

##Output Parameters
```bash
OTPSubmit: number -> Returns Entered OTP value in number format.
```

##Example Usage 
```bash
<app-svsudo-verify-otp title="Enter OTP" subTitle="OTP will be sent to your mobile number. Please verify." buttonLabel="VERIFY OTP" digitsOfOTP="6" (OTPSubmit)="OTPSubmit($event)"></app-svsudo-verify-otp>
```

```bash
![screenshot](./src/app/verify-otp/otp_img.png "OTP screenshot")
```
