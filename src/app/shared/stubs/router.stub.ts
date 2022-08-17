import { of } from "rxjs";

export const routerStub = {
    events: {
        pipe: jest.fn(() => of({
            etapaAtual: '2',
            numeroSteps: '3'
        }))
    }
}