module.exports = {
    getTestMessageV2: (req, res) => {
        res.json({ message: "GET /v2/test returning response" });
    },
    createTestMessageV2: (req, res) => {
        const message = req.body.message;
        res.status(201).json({
            message: `POST /v2/test created test resource with message: ${message}`,
        });
    },
    deleteTestMessageV2: (req, res) => {
        const id = req.params.id;
        res.status(204).json({
            message: `DELETE /v2/test/:id created test resource with id: ${id}`,
        });
    },
    updateTestMessageV2: (req, res) => {
        const id = req.params.id;
        const message = req.body.message;
        res.json({
            message: `PUT /v2/test/:id created test resource: id: ${id}, message: ${message}`,
        });
    },
};
