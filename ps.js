var ps = require('ps-node');

ps.lookup({
  command: ""
},
function(err, resultList ) {
  if (err) {
    throw new Error( err );
  }

  resultList.filter(function( process ) {
    return process && process.command.toLowerCase().match("elite")
  })
  .forEach(function(process) {
    console.log(process)
  })

})
