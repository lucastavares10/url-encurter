const ShortcutModel = require("../app/encurter/encurter-model");
const CronJob = require("cron").CronJob;
const config = require("config");
const timezone = config.get("timezone");

const clear = new CronJob(
  "00 00 00 * * *",
  async function () {
    try {
      console.log("Checking expired links every 00:00:00");
      await ShortcutModel.findAll().then((res) => {
        res.forEach((el) => {
          const dateLink = new Date(el.dataValues.createdAt);
          const dateNow = new Date();

          if (dateNow - dateLink > 172800000) {
            //172800000 === 48 hour
            async function deleteShortcut() {
              try {
                await ShortcutModel.destroy({
                  where: {
                    id: el.dataValues.id,
                  },
                });
              } catch (error) {
                console.log(error);
              }
            }

            deleteShortcut();
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  null,
  true,
  timezone
);

clear.start();
