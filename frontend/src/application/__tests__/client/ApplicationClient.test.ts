import nock from "nock";
import {describe, expect, it} from "vitest";
import {createApplication, getAllApplications} from "../../client/ApplicationClient.ts";
import {applicationList, applicationOne} from "../../helper/ApplicationHelpers.ts";

describe("ApplicationClient", () => {
    it("should create application", async () => {
        const scope = nock("http://localhost:3000").post("/api/applications").reply(200, applicationOne);
        const application = await createApplication(applicationOne);

        expect(application).toEqual(applicationOne);
        expect(scope.isDone()).true;
    });

    it("should get all applications", async () => {
        const scope = nock("http://localhost:3000").get("/api/applications").reply(200, applicationList)
        const actualApplications = await getAllApplications();

        expect(actualApplications).toEqual(applicationList);
        expect(scope.isDone()).true
    })
});
