const config = require('config');
let liveTime = 60000; // 900000 = 15 minutos, 60000 = 1 minuto

setInterval(async function () {
    try {
        console.log(`Encurter server still running on port ${config.get('port')} \n ${new Date()}`);
    } catch (error) {
        log.error('** Erro na schedule do encurter **');
        log.error(`** Erro: ${error} **`);
    }

}, liveTime);