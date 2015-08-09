
import distinct  from "../util/stream/distinct"

export default function distinctSystems(systemStream) {

  return ( systemStream

    .through(
      distinct((a,b) => !a || a.name !== b.name))

  )

}
