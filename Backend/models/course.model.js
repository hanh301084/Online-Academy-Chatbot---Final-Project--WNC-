const db = require('../utils/db');

module.exports = {
    all() {
        return db('course');
    },
    async single(id) {
        const course = await db("course").where("id", id);
        if (course.length === 0) {
            return null;
        }
        return course[0];
    }
};