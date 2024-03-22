import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import HomePage from "../../view/HomePage.tsx";

describe('HomePage', () => {
    it('should display main page header', () => {
        render(<HomePage/>)
        expect(screen.getByText("Special Operations Recruiting Battalion")).toBeVisible()
    });

    it('should display events header', () => {
        render(<HomePage/>)
        expect(screen.getByText("Events")).toBeVisible()
    });
});