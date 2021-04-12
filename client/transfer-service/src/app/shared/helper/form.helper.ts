
import { FormGroup, AbstractControl } from '@angular/forms'
import { Input, Directive } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Directive()
export abstract class FormHelper {

  @Input() form: FormGroup

  constructor(protected snackBar: MatSnackBar) { }

  abstract initForm()

  abstract submit(formValue?: any)

  setValue(name: string, value: any): void {
    this.control(name).setValue(value)
  }

  setValueFbNested(formGroupName: string, controlName: string, value: any): void {
    this.control(formGroupName).get(controlName).setValue(value)
  }

  setValidators(name: string, value: any): void {
    this.control(name).setValidators(value)
  }

  value = (name: string): any => this.control(name) ? this.control(name).value : null

  nonNull = (value: any, type?: string): any => value || this.getDefaultValue(type)

  control = (name: string): AbstractControl => this.form.get(name)

  protected stringifyUpper = (value: any): string => JSON.stringify(value).toUpperCase()

  protected getDefaultValue(type?: string): any {
    if (type)
      switch (type) {
        case 'string': return ''
        case 'number': return 0
        case 'array': return []
      }
    return ''
  }

  openAlert(msg: string, duration?: number, verticalPosition?: 'top' | 'bottom') {
    this.snackBar.open(
      msg, 'OK', {
      duration: duration || 3600,
      verticalPosition: verticalPosition || 'bottom',
      horizontalPosition: 'center',
      panelClass: 'snackbar'
    })
  }
}