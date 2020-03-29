const fs = require("fs");
const rimraf = require("rimraf");
const { expect } = require("chai");
const MySQLGeneratorForExpress = require(__dirname + "/../src/index.js");

describe("MySQLGeneratorForExpress class", function() {

	before(function(done) {
		rimraf.sync(__dirname + "/db1.schema.js");
		rimraf.sync(__dirname + "/db1");
		done();
	});

	it("can create projects from scratch, credentials and new template directories", function(done) {
		expect(fs.existsSync(__dirname + "/db1")).to.equal(false);
		expect(fs.existsSync(__dirname + "/db1.schema.js")).to.equal(false);
		expect(fs.existsSync(__dirname + "/db1/package.json")).to.equal(false);
		MySQLGeneratorForExpress.generateProject({
			schema: {
				generation: true,
				user: "test",
				password: "test",
				database: "database2",
				host: "127.0.0.1",
				port: 3306,
				output: __dirname + "/db1.schema.js",
			},
			generator: {
				schema: [__dirname + "/db1.schema.js"],
				directories: [],
				output: __dirname + "/db1",
			}
		}).then(() => {
			expect(fs.existsSync(__dirname + "/db1")).to.equal(true);
			expect(fs.existsSync(__dirname + "/db1/package.json")).to.equal(true);
			expect(fs.existsSync(__dirname + "/db1.schema.js")).to.equal(true);
			done();
		}).catch(done);
	});

});