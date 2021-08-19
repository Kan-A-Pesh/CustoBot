const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({
    guildId: Joi.string().alphanum().required(),
    guildName: Joi.string().required(),
    nodes: Joi.array(),
});

const guilds = db.get('guilds');

function getAll() {
    return guilds.find();
}

function addGuild() {
    return guilds.find();
}

function create(message) {
    if (!message.username) message.username = 'Anonymous';

    const result = schema.validate(message);
    if (result.error == null) {
        message.created = new Date();
        return messages.insert(message);
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    create,
    getAll
};