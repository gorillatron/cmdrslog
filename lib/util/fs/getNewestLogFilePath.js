
import fs      from "fs"
import path    from "path"
import max     from "lodash/collection/max"

export default function getNewestLogFilePath(dir) {
  const files = fs.readdirSync(dir)

  const netlogs = files.filter((file) => file.toLowerCase().match("netlog"))

  var newestLogFilePath = max(netlogs, function (f) {
    let fullpath = path.join(dir, f)
    return fs.statSync(fullpath).ctime
  })

  return path.join(dir, newestLogFilePath)
}
