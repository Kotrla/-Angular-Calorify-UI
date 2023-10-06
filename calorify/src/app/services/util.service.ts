import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor() { }

    public static getFormControl(form: FormGroup, key: string): FormControl {
        return form.controls[key] as FormControl;
    }
    
    public static areFormsChanged(
        initialFormValues: Record<string, any>, currentFormValues: Record<string, any>, skipValueTransformKey?: string[]
    ): boolean {
        const initialFormValuesToCompare = this.formatForm(initialFormValues, skipValueTransformKey);
        const currentFormValuesToCompare = this.formatForm(currentFormValues, skipValueTransformKey);

        return JSON.stringify(initialFormValuesToCompare) !== JSON.stringify(currentFormValuesToCompare);
    }
  
    public static formatForm(formValues: Record<string, any>, skipValueTransformKey?: string[]): Record<string, any> {
        return Object
            .entries(formValues)
            .sort()
            .slice()
            .reduce((accumulator, keyValuePair) => {
                const [key, value] = keyValuePair;

                if (!skipValueTransformKey || !skipValueTransformKey.includes(key)) {
                    const valueToUse = value === null ? null : value.toString().toLowerCase();

                    return { ...accumulator, [key]: valueToUse };
                }

                if (skipValueTransformKey.includes(key)) {
                    const valueToUse = value === null ? null : value.toString();

                    return { ...accumulator, [key]: valueToUse };
                }

                return accumulator;
            }, {});
    }
}
