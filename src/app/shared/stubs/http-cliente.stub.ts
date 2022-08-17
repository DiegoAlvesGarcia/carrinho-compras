import { of } from "rxjs";

export const httpClientStub = {
    get: jest.fn(() => of({})),
    post: jest.fn(() => of()),
}