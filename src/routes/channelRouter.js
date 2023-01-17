const express = require("express");
const router = express.Router();
const ChannelService = require("../services/channelService");

router.get("/testHosting", async (req, res) =>
  ChannelService.testHosting(req, res)
);

router.get("/getAllChannel", async (req, res) =>
  ChannelService.getAllChannel(req, res)
);

router.get("/getAllChannelByName", async (req, res) =>
  ChannelService.getAllChannelByName(req, res)
);

module.exports = router;
