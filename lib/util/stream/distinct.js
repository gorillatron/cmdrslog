
import Y from "highland"

export default function distinct(fn) {
  return (stream) => {
    let prev = null
    let out = Y()

    stream.each((next) => {
      if(fn(prev, next)) {
        out.write(next)
      }
      prev = next
    })

    return out
  }
}
