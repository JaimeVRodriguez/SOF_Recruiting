import {describe, expect, it} from "vitest";
import nock from "nock";
import {branchList} from "../../helper/BranchHelper.ts";
import {getAllBranches} from "../../client/BranchesClient.ts";

describe('BranchesClient', () => {
    it('should get all branches', async () => {
        const scope = nock("http://localhost:3000").get("/api/branches").reply(200, branchList)
        const actualBranches = await getAllBranches();

        expect(actualBranches).toEqual(branchList);
        expect(scope.isDone()).true
    });
})