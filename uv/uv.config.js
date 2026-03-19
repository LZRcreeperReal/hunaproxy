self.__uv$config = {
  prefix: '/service/',                    // Proxy URLs will be /service/xxxxxx
  bare: '/bare/',                         // Change this to your Bare server path (e.g. 'https://public-bare.example.com/' if external)
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/uv/uv.handler.js',           // or '/uv/uv.client.js' if your dist uses that name
  bundle: '/uv/uv.bundle.js',
  config: '/uv/uv.config.js',
  sw: '/uv/uv.sw.js',
};
