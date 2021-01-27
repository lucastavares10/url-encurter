const ShortcutModel = require("./encurter-model");
const perma = require("perma");
const config = require("config");

module.exports = {
  list: async (req, res) => {
    try {
      const shortcuts = await ShortcutModel.findAll();

      res.status(200).json(shortcuts);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  create: async (req, res) => {
    try {
      const url = req.body.url;
      const key = perma(url);

      const shortcut = await ShortcutModel.create({ key: key, url: url });
      const link = `http://${config.get("url-encurter-host")}:${config.get(
        "port"
      )}/${shortcut.key}`;

      res.status(200).json({
        message: "Url encurtada com sucesso!",
        link: link,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  redirect: async (req, res) => {
    try {
      const key = req.params.id;
      const shortcut = await ShortcutModel.findOne({ where: { key: key } });

      res.redirect(shortcut.url);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
