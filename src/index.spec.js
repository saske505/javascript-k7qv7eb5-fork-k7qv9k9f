// BDD-Style Testing (powered by https://mochajs.org/)
//
// Import your stories
// import * as stories from "./index.stories.js";
//
// Use any renderer for you stories
// import { fixture } from "@open-wc/testing-helpers";
//
// Use any assert library
import { countLetter } from "./index.js";
import { hello_world } from "./index.stories.js";
import chai from "chai/chai.js";
const expect = chai.expect;

describe("Hello world", function() {
  it("should contains only one W", function() {
    expect(hello_world()["w"]).to.equal(1);
  });
});
