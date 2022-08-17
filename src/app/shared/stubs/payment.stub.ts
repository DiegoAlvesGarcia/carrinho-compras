import { of } from "rxjs";
import { paymentsMock } from "../mocks/payments.mock";

export const paymentsStub = {
    getInstallments: jest.fn(() => of(paymentsMock))
}