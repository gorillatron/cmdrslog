
import Y          from "highland"
import {spawn}    from "child_process"


export default function logStream(spec = {lines: 0, path: null}) {

  const lineSink = Y()
  const tail = spawn("tail", [spec.path, "-f", "--lines", spec.lines])

  tail.stdout.setEncoding("utf8")
  tail.stdout.pipe(lineSink)

  const out = lineSink
    .split()

  return out
}
