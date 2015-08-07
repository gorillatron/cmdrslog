

import path                   from "path"
import Y                      from "highland"
import {spawn}                from "child_process"
import countFileLines         from "./lib/countFileLines"
import getNewestLogFile       from "./lib/getNewestLogFile"

export default function logstream(spec) {

  const logdir = spec.logdir
  const out = Y()

  const logfile = getNewestLogFile(logdir)

  let logFileAbsolutePath = path.join(logdir, logfile)

  countFileLines(logFileAbsolutePath, (err, count) => {

    const tail = spawn("tail", [logFileAbsolutePath, "-f", "--lines", count])

    tail.stdout.setEncoding("utf8")
    tail.stdout.pipe(out)

    out.on("end", () => tail.kill())

  })

  return out
}
