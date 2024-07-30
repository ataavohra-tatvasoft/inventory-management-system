import socketio from 'socket.io'
import { Server as HTTPServer } from 'http'
import { Server as SocketIOServer } from 'socket.io'
import { HttpError } from '../libs'
import { httpErrorMessageConstant, httpStatusConstant } from '../constants'

let io: SocketIOServer

const init = (server: HTTPServer) => {
  io = new socketio.Server(server)
  return io
}

const getIO = () => {
  if (!io) {
    throw new HttpError(
      httpErrorMessageConstant.SOCKET_UNINITIALIZED,
      httpStatusConstant.BAD_REQUEST
    )
  }
  return io
}

export default { init, getIO }
