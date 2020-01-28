const axios = require("axios");
const Dev = require("../models/dev");

module.exports = {
  async store(req, ress) {
    const { github_username, techs, latitude, longitude } = req.body;
    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    const { name = login, avatar_url, bio } = response.data;

    const techsArray = techs.split(",").map(tech => tech.trim());

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location
    });

    return ress.json(dev);
  }
};
