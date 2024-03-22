import {render, screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import App from "../../../App.tsx";

describe("Navbar", () => {
    it("should display Navbar", function () {
        render(<App/>)

        expect(screen.getByRole("menuitem", {name: "Home"})).toBeVisible()
        expect(screen.getByRole("menuitem", {name: "Start Application"})).toBeVisible()
        expect(screen.getByRole("menuitem", {name: "Recruiters"})).toBeVisible()
    })
})