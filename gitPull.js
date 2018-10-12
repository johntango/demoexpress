var exec = require('child_process').exec;
var child = exec('git pull --rebase origin master',
 function(error, stdout, stderr)  {
   console.log('error', error);
   console.log('stdout: ', stdout);
   console.log('stderr: ', stderr);
   if (error !== null) {
  console.log("exec error", error);
 }
});