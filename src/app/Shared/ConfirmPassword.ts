import { AbstractControl, ValidationErrors } from "@angular/forms";

export function confirmPasswordVailadators(control:AbstractControl):ValidationErrors 
{
   const password =control.get('password');
   const confirmPassword = control.get('confirmPassword');

   if(password.pristine || confirmPassword.pristine)
   {
       return null;
   }
   else
   {
    return password && confirmPassword && password.value !== confirmPassword.value 
    ?{'misMatch':true}
    : null;
   }


}