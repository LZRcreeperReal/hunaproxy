/*global Ultraviolet*/ 
self.__uv$config = { 
  prefix: '/service/',               // or '/uv/service/' — keep whatever your template uses
  bare: 'https://bare.bare.run/',    // ← CHANGE TO ONE OF THESE REMOTE ONES
  // bare: 'https://uv.bare.run/',   // alternative
  // bare: 'https://tomp.app/',      // another common public one (check if alive)
  // bare: 'https://bare1.meticulous.ai/',  // try if others are down
  encodeUrl: Ultraviolet.codec.xor.encode, 
  decodeUrl: Ultraviolet.codec.xor.decode, 
  handler: '/uv/uv.handler.js',      // adjust paths if your uv/ folder is different
  client: '/uv/uv.client.js',
  bundle: '/uv/uv.bundle.js',
  config: '/uv/uv.config.js',
  sw: '/uv/uv.sw.js',
};
