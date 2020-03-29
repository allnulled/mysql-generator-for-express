const MySQLSchemaGenerator = require("mysql-schema-generator");

class MySQLGeneratorForExpress {

	static generateProject(options = {}) {
		options.generator.directories = [__dirname + "/templates"].concat(options.generator.directories);
		return MySQLSchemaGenerator.generateProject(options);
	}

}

module.exports = MySQLGeneratorForExpress;