'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var name = "@dynatrace/backstage-plugin-dql-backend";
var version = "0.1.0";
var license = "Apache-2.0";
var main = "src/index.ts";
var types = "src/index.ts";
var publishConfig = {
	access: "public",
	main: "dist/index.cjs.js",
	types: "dist/index.d.ts"
};
var repository = {
	type: "git",
	url: "git+https://github.com/Dynatrace/backstage-plugin.git",
	directory: "plugins\\dql-backend"
};
var backstage = {
	role: "backend-plugin",
	pluginId: "dql",
	pluginPackages: [
		"@dynatrace/backstage-plugin-dql",
		"@dynatrace/backstage-plugin-dql-backend",
		"@dynatrace/backstage-plugin-dql-common"
	]
};
var configSchema = "config.d.ts";
var scripts = {
	start: "backstage-cli package start",
	build: "backstage-cli package build",
	lint: "backstage-cli package lint",
	test: "backstage-cli package test",
	clean: "backstage-cli package clean",
	prepack: "backstage-cli package prepack",
	postpack: "backstage-cli package postpack"
};
var dependencies = {
	"@backstage/config": "^1.2.0",
	"@dynatrace/backstage-plugin-dql-common": "^0.1.0",
	"@types/express": "*",
	express: "^4.17.1",
	"express-promise-router": "^4.1.0",
	"https-proxy-agent": "7.0.5",
	"node-fetch": "^2.6.7",
	winston: "^3.2.1",
	yn: "^4.0.0",
	zod: "^3.22.4"
};
var devDependencies = {
	"@backstage/cli": "^0.28.0",
	"@backstage/test-utils": "^1.5.5",
	"@types/supertest": "^6.0.0",
	msw: "^2.0.0"
};
var files = [
	"dist",
	"config.d.ts"
];
var packageJson = {
	name: name,
	version: version,
	license: license,
	main: main,
	types: types,
	publishConfig: publishConfig,
	repository: repository,
	backstage: backstage,
	configSchema: configSchema,
	scripts: scripts,
	dependencies: dependencies,
	devDependencies: devDependencies,
	files: files
};

exports.backstage = backstage;
exports.configSchema = configSchema;
exports.default = packageJson;
exports.dependencies = dependencies;
exports.devDependencies = devDependencies;
exports.files = files;
exports.license = license;
exports.main = main;
exports.name = name;
exports.publishConfig = publishConfig;
exports.repository = repository;
exports.scripts = scripts;
exports.types = types;
exports.version = version;
//# sourceMappingURL=package.json.cjs.js.map
