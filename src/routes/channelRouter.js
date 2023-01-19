const express = require("express");
const router = express.Router();
const ChannelService = require("../services/channelService");

router.get("/getAllChannel", async (req, res) =>
  ChannelService.getAllChannel(req, res)
);

router.get("/getAllChannelByName", async (req, res) =>
  ChannelService.getAllChannelByName(req, res)
);

router.get("/getAllChannelByCategory", async (req, res) =>
  ChannelService.getAllChannelByCategory(req, res)
);

module.exports = router;
