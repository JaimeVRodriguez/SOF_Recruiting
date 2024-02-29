import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import MainPage from "../MainPage.tsx";

describe('MainPage', () => {
    it('should display main page header', () => {
        render(<MainPage/>)
        expect(screen.getByText("Special Operations Recruiting Battalion")).toBeVisible()
    });

    it('should display events header', () => {
        render(<MainPage/>)
        expect(screen.getByText("Events")).toBeVisible()
    });
});