import {render, screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import App from "../../../App.tsx";
import {userEvent} from "@testing-library/user-event";

describe("Application", () => {
    it("should display Application Header", async function () {
        render(<App/>)

        await userEvent.click(screen.getByRole("menuitem", {name: "Start Application"}))

        expect(screen.getByText("Application")).toBeVisible()
    })

    it("should display dodid field", async function () {
        render(<App/>)

        await userEvent.click(screen.getByRole("menuitem", {name: "Start Application"}))

        expect(screen.getByRole("textbox", {name: "DODID"})).toBeVisible()
    })

    it("should display first name field", async function () {
        render(<App/>)

        await userEvent.click(screen.getByRole("menuitem", {name: "Start Application"}))

        expect(screen.getByRole("textbox", {name: "First Name"})).toBeVisible()
    })

    it("should display selection radio group", async function () {
        render(<App/>)
        await userEvent.click(screen.getByRole("menuitem", {name: "Start Application"}))
        !expect(screen.getByRole("radio", {name: "SFAS"})).not.toBeChecked()

    })

    it("should display rank select", async function () {
        render(<App/>)
        await userEvent.click(screen.getByRole("menuitem", {name: "Start Application"}))

        const rank = screen.getByRole("combobox", {name: /rank/i})
        expect(rank).toBeVisible()
    })

    it('should display alert after submission', async () => {
        render(<App/>)
        await userEvent.click(screen.getByRole("menuitem", {name: "Start Application"}))

        await userEvent.click(screen.getByRole("radio", {name: "SFAS"}))

        const dodid = screen.getByRole("textbox", {name: "DODID"})
        await userEvent.type(dodid, "1386584431")

        const firstName = screen.getByRole("textbox", {name: "First Name"})
        await userEvent.type(firstName, "Jaime")

        const lastName = screen.getByRole("textbox", {name: "Last Name"})
        await userEvent.type(lastName, "Rodriguez")

        await userEvent.click(screen.getByRole("combobox", {name: "Rank"}))
        await userEvent.click(screen.getByRole("option", {name: "SSG"}))

        await userEvent.click(screen.getByRole("button", {name: /submit/i}))

        expect( await screen.findByText(/success/i)).toBeInTheDocument()
    });


})