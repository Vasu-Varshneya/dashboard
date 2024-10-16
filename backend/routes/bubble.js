const express = require('express');
const router = express.Router();
const datamodel = require('../models/datamodel');

router.post('/bubblechart', async (req, res) => {
        const { x, y, r } = req.body;

        // Validate incoming data
        if (x === undefined || y === undefined || r === undefined) {
            return res.status(400).json({ success: false, message: 'x, y, and r are required' });
        }

        if (typeof x !== 'number' || typeof y !== 'number' || typeof r !== 'number') {
            return res.status(400).json({ success: false, message: 'Invalid data type for x, y, or r' });
        }

        // Create a new instance of the data model and save it
        const newData = await datamodel.create({ x, y, r });
        newData.save(); // Save the data

        // Respond with success
        return res.json({ success: true });
});
router.get('/bubble', async (req, res) => {
    try {
        const data = await datamodel.find({});
        res.json(data); // Respond with the data in JSON format
    } catch (error) {
        console.error('Error fetching data:', error); // Log the error for debugging
        res.status(500).json({ success: false, message: 'Server error' }); // Send a 500 status code with an error message
    }
});

module.exports = router