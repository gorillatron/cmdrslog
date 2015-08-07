
import logStream              from "./streams/logStream"
import systems                from "./streams/systems"
import distinctSystems        from "./streams/distinctSystems"
import getNewestLogFilePath   from "./util/fs/getNewestLogFilePath"


const logFilePath = getNewestLogFilePath(
  'C:/Program Files (x86)/Steam/steamapps/common/Elite Dangerous/Products/FORC-FDEV-D-1010/Logs')


const ls = logStream({
  path: logFilePath,
  lines: 99999
})

const systemStream = ls.fork().through(systems)
const enteredSystemStream = systemStream.fork().through(distinctSystems)

systemStream.observe().each((system) => console.log("SYSTEM:", system))
enteredSystemStream.each((system) => console.log("DISTINCT:", system))
