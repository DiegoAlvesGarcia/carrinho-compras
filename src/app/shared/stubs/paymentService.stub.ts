import { of } from "rxjs";
import { paymentsMock } from "../mocks/payments.mock";

export const paymentServiceStub = {
    getInstallments: jest.fn(() => (of(paymentsMock))),
    setDataCard: jest.fn(() => of(''))
}