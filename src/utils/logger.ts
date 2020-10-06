import log4js from 'log4js'

log4js.configure({
  appenders: {
    file: {
      type: "file",
      filename: "applicationLog.txt",
      maxLogSize: 10 * 1024 * 1024,
      compress: true,
      encoding: "utf-8",
      flags: "w+"
    },
    out: {
      type: "stdout"
    }
  },
  categories: {
    default: { appenders: ["file", "out"], level: "trace"}
  }
})

export default log4js