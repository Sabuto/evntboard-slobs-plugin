const SockJS = require('sockjs-client')

class SlobsEvntBoard {
  constructor(options, { evntBus, logger }) {
    this.accessToken = options.accessToken;
    this.ip = options.url;
    this.port = options.port;
    this.evntBus = evntBus;
    this.logger = logger;

    this.socket = null;
    this.url = `${ip}:${port}`;
  }

  async load() {
    try {
      this.evntBus?.newEvent('slobs-load')
      this.socket = new SockJS(this.url);

      this.socket.onopen = () => {
        const connectMessage = JSON.stringify({
		      jsonrpc: '2.0',
		      id: 1,
		      method: 'auth',
		      params: {
			      resource: 'TcpServerService',
			      args: [this.accessToken],
		      },
        });
        
        this.socket.send(connectMessage)
      }

      this.socket.onmessage = (message) => {
        const data = JSON.parse(message.message.data)
        this.eventBus?.newEvent('slobs-message')
      }
    } catch (e) {
      console.log(e)
    }
  }
}

async unload() {
  this.socket = null
  this.evntBus?.newEvent('slobs-unload')
}

async reload() {
  await this.unload()
  await this.load()
}

module.exports = SlobsEvntBoard
