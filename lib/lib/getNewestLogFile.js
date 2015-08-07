
import fs      from "fs"
import path    from "path"
import max     from "lodash/collection/max"

export default function getNewestLogFile(dir) {
  var files = fs.readdirSync(dir)

  var netlogs = files.filter((file) => file.toLowerCase().match("netlog"))

  return max(netlogs, function (f) {
    var fullpath = path.join(dir, f)
    return fs.statSync(fullpath).ctime
  })
}
