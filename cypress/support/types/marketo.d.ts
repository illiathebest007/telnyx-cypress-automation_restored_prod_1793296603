// Minimal typings for the Marketo Forms 2.0 API used on the contact page.
// https://experienceleague.adobe.com/en/docs/marketo-developer/marketo/javascriptapi/forms-api-reference

export interface MktoForm {
  getId(): number;
  validate(): boolean;
  submittable(canSubmit: boolean): MktoForm;
}

export interface MktoForms2 {
  allForms(): MktoForm[];
}

declare global {
  interface Window {
    MktoForms2?: MktoForms2;
  }
}
