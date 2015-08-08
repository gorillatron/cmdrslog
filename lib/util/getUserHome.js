
export default function getUserHome(process) {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}
