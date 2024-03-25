import {render, screen} from "@testing-library/react";
import {beforeEach, describe, expect, it, vi} from "vitest";
import {userEvent} from "@testing-library/user-event";
import CreateApplication from "../../view/CreateApplication.tsx";
import * as UseSnackbar from "../../../snackbar/provider/SnackbarProvider.tsx";
import {SnackbarContext} from "../../../snackbar/type/SnackbarContext.tsx";

vi.mock('../../../snackbar/provider/SnackbarProvider.tsx')

describe("CreateApplication", () => {
    let snackbarModel: SnackbarContext;

    beforeEach(async () => {
        userEvent.setup()
        snackbarModel = {openSnackbar: vi.fn()};
        vi.spyOn(UseSnackbar, 'useSnackbar').mockReturnValue(snackbarModel);
        render(<CreateApplication/>)
    })

    it("should display CreateApplication Header", async function () {
        expect(screen.getByText('SORB Application')).toBeVisible()
    })

    it("should display dodid field", async function () {
        expect(screen.getByRole("textbox", {name: "DODID"})).toBeVisible()
    })

    it("should display first name field", async function () {
        expect(screen.getByRole("textbox", {name: "First Name"})).toBeVisible()
    })

    it("should display selection radio group", async function () {
        !expect(screen.getByRole("radio", {name: "SFAS"})).not.toBeChecked()
    })

    it("should display rank select", async function () {
        const rank = screen.getByRole("combobox", {name: /rank/i})
        expect(rank).toBeVisible()
    })

    it('should display mos field', () => {
        expect(screen.getByRole('textbox', {name: 'MOS'})).toBeVisible();
    });

    //TODO: Fix this test
    it.todo('should display alert after submission', async () => {
        await userEvent.click(screen.getByRole("radio", {name: "SFAS"}))

        const dodid = screen.getByRole("textbox", {name: "DODID"})
        await userEvent.type(dodid, "1386584431")

        const firstName = screen.getByRole("textbox", {name: "First Name"})
        await userEvent.type(firstName, "Jaime")

        const lastName = screen.getByRole("textbox", {name: "Last Name"})
        await userEvent.type(lastName, "Rodriguez")

        await userEvent.click(screen.getByRole("combobox", {name: "Rank"}))
        await userEvent.click(screen.getByRole("option", {name: "SSG"}))

        const mos = screen.getByRole("textbox", {name: "MOS"})
        await userEvent.type(mos, "37F")

        await userEvent.click(screen.getByRole("button", {name: /submit/i}))

        expect(snackbarModel.openSnackbar).toBeCalledWith('Success');
    });


})