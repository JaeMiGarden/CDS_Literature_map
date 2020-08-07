import {createLogger, format, transports, info} from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import moment from 'moment';
import fs from 'fs';
import 'moment-timezone';

const { combine, printf } = format;

const logDir = __dirname + "/../logs";
const dailyRotateFileTransport = new transports.DailyRotateFile({
    filename: 'logs/Munhak-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxFiles: '14d'
});

moment.tz.setDefault('Asia/Seoul');
const timeStamp = () => moment().format('YYYY-MM-DD HH:mm:ss');

const loggingFormat = printf(({ level, message }) => {
    return `${timeStamp()} ${level} : ${message}`;
})

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const infoTransport = new transports.Console({
  level: 'info'
})

const errorTransport = new transports.Console({
  level: 'error'
})

const logger = createLogger({
  format: combine(
    loggingFormat
    ),
  transports: [infoTransport, errorTransport, dailyRotateFileTransport]
})

const stream = {
  write: message => {
    logger.info(message)
  }
}

export { logger, stream };