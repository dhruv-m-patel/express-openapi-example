module.exports = {
    getTestMessageV1: (req, res) => {
        res.json({ message: "GET /v1/test returning response" });
    },
    createTestMessageV1: (req, res) => {
        const message = req.body.message;
        res.status(201).json({
            message: `POST /v1/test created test resource with message: ${message}`,
        });
    },
    deleteTestMessageV1: (req, res) => {
        const id = req.params.id;
        res.status(204).json({
            message: `DELETE /v1/test/:id created test resource with id: ${id}`,
        });
    },
    updateTestMessageV1: (req, res) => {
        const id = req.params.id;
        const message = req.body.message;
        res.json({
            message: `PUT /v1/test/:id created test resource: id: ${id}, message: ${message}`,
        });
    },
};
