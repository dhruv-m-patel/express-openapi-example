const { healthCheck } = require("./health");

const {
    getTestMessageV1,
    createTestMessageV1,
    deleteTestMessageV1,
    updateTestMessageV1,
} = require("./v1/test");

const {
    getTestMessageV2,
    createTestMessageV2,
    deleteTestMessageV2,
    updateTestMessageV2,
} = require("./v2/test");

module.exports = {
    healthCheck,
    getTestMessageV1,
    createTestMessageV1,
    deleteTestMessageV1,
    updateTestMessageV1,
    getTestMessageV2,
    createTestMessageV2,
    deleteTestMessageV2,
    updateTestMessageV2,
};
