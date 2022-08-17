import { FormControl, FormGroup } from "@angular/forms";

export const formBuilderStub = {
    group: jest.fn(() => new FormGroup({
        numCard: new FormControl,
        name: new FormControl,
        date: new FormControl,
        cvv: new FormControl,
        installments: new FormControl, 
    }))
}