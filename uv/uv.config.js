/*global Ultraviolet*/ 
self.__uv$config = { 
  prefix: '/bare/',
  bare: 'https://bare.bare.run/',
  // bare: 'https://uv.bare.run/',     // Alternative public one
  // bare: 'https://tomp.app/',        // Another option if the above are slow/down
  // bare: 'https://bare1.meticulous.ai/',  // Backup if needed
  encodeUrl: Ultraviolet.codec.xor.encode, 
  decodeUrl: Ultraviolet.codec.xor.decode, 
  handler: '/uv/uv.handler.js',
  client: '/uv/uv.client.js',
  bundle: '/uv/uv.bundle.js',
  config: '/uv/uv.config.js',
  sw: '/uv/uv.sw.js',
};