import { isPositive } from "./index.js";
import { it, describe, jest, expect } from "@jest/globals";

describe("index page", ()=> {
    it("testing isPositive", ()=> {
        expect(isPositive(100)).toBe(true)
        expect(isPositive(-100)).toBe(false)
        expect(isPositive(100)).toBe(true)
    })
})