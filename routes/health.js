module.exports = {
    healthCheck: (req, res) => {
        res.json({ message: "Service is healthy" });
    },
};
