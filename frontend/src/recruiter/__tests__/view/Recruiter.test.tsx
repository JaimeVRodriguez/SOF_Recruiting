import {beforeEach, describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import Recruiter from "../../view/Recruiter.tsx";

describe('Recruiter', () => {
    beforeEach(() => {
        render(<Recruiter/>)
    })
    it('should display Recruiter header', () => {
        expect(screen.getByText(/recruiter/i)).toBeVisible();
    });

    it('should display datagrid', () => {
        expect(screen.getByRole('grid')).toBeVisible();
    });

    it('should display column headers', () => {
        expect(screen.getByRole('columnheader', {name: /selection group/i})).toBeVisible()
        expect(screen.getByRole('columnheader', {name: /dodid/i})).toBeVisible()
        expect(screen.getByRole('columnheader', {name: /rank/i})).toBeVisible()
        expect(screen.getByRole('columnheader', {name: /first name/i})).toBeVisible()
        expect(screen.getByRole('columnheader', {name: /last name/i})).toBeVisible()
        expect(screen.getByRole('columnheader', {name: /mos/i})).toBeVisible()
    });
});