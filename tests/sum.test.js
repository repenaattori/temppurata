import { expect, test } from "vitest";
import {sum} from '../sum.js';

test('Test basic sum', () =>{
    expect(sum(1,2)).toBe(3);
});