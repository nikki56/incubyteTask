import {add} from "./StringCalculator";

describe("String Calculator", () => {
    test("returns 0 for an empty string", () => {
        expect(add("")).toBe(0);
    });

    test("returns the number itself for a single number", () => {
        expect(add("1")).toBe(1);
    });


});
