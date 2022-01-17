const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
    guildId: Joi.string().required(),
    logChannel: Joi.string(),
    nodes: Joi.array(),
});

const guilds = db.get('guilds');

function getAll() {
    return guilds.find();
}
function getById(id) {
    return guilds.findOne({guildId: id});
}

function create(guild) {

    const result = schema.validate(guild);
    if (result.error == null) {
        return guilds.insert(guild);
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    create,
    getAll
};