
import Y from "highland"

export default function distinct(stream) {

  let current = null
  let out = Y()

  stream.each((value) => {
    if(value !== current) {
      out.write(value)
    }
    current = value
  })

  return out
}
