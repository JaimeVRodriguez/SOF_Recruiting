import nock from "nock";
import {describe, expect, it} from "vitest";
import {createApplication, getAllApplications, getAllBranches, getAllEvents} from "../ApplicationRequestClient.ts";
import {applicationList, applicationOne} from "../../helpers/ApplicationHelpers.ts";
import {eventList} from "../../helpers/EventHelper.ts";
import {branchList} from "../../helpers/BranchHelper.ts";


describe("ApplicationRequestClient", () => {
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

    it("should get all events", async () => {
        const scope = nock("http://localhost:3000").get("/api/events").reply(200, eventList)
        const actualEvents = await getAllEvents();

        expect(actualEvents).toEqual(eventList);
        expect(scope.isDone()).true
    })

    it('should get all branches', async () => {
        const scope = nock("http://localhost:3000").get("/api/branches").reply(200, branchList)
        const actualBranches = await getAllBranches();

        expect(actualBranches).toEqual(branchList);
        expect(scope.isDone()).true
    });
});
