
export default function systems(logStream) {

  return ( logStream

    .filter((line) => {
      return line && line.toLowerCase().match(/system\:\d+/)
    })

    .map((line) => {
      let pattern = /System\:\d+\((.+?)\)/.exec(line)
      let [full, system] = pattern

      return {system}

    })
  )

}
