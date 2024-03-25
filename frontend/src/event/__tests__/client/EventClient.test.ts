import {describe, expect, it} from "vitest";
import nock from "nock";
import {eventList} from "../../helper/EventHelper.ts";
import {getAllEvents} from "../../client/EventClient.ts";


describe('EventClient', () => {
    it("should get all events", async () => {
        const scope = nock("http://localhost:3000").get("/api/events").reply(200, eventList)
        const actualEvents = await getAllEvents();

        expect(actualEvents).toEqual(eventList);
        expect(scope.isDone()).true
    })
});