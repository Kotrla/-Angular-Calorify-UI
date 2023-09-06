import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor() { }

    areFormsChanged(
        initialFormValues: Record<string, any>, currentFormValues: Record<string, any>, skipValueTransformKey?: string[]
    ): boolean {
        const initialFormValuesToCompare = this.formatForm(initialFormValues, skipValueTransformKey);
        const currentFormValuesToCompare = this.formatForm(currentFormValues, skipValueTransformKey);

        return JSON.stringify(initialFormValuesToCompare) !== JSON.stringify(currentFormValuesToCompare);
    }
  
    formatForm(formValues: Record<string, any>, skipValueTransformKey?: string[]): Record<string, any> {
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
