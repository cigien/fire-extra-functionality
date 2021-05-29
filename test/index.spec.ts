import { expect } from "chai";
import { getDomainId } from "../src/index.js";

global.GM_getResourceText = (_input: string) => "mock resource text";
global.location = { pathname: "test" } as Location;

describe("main", () => {
  it("everything works ok", () => {
    const id = getDomainId("stackoverflow.com");
    expect(id).to.be.equal("fire-extra-stackoverflow-com");
  });
});
