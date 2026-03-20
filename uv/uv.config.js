/*global Ultraviolet*/ 
self.__uv$config = { 
  prefix: '/service/',  // Keep this or change to '/uv/service/' if your template uses a different path
  bare: 'https://bare.bare.run/',  // Try this first – commonly used and often reliable
  // bare: 'https://uv.bare.run/',     // Alternative public one
  // bare: 'https://tomp.app/',        // Another option if the above are slow/down
  // bare: 'https://bare1.meticulous.ai/',  // Backup if needed
  encodeUrl: Ultraviolet.codec.xor.encode, 
  decodeUrl: Ultraviolet.codec.xor.decode, 
  handler: '/uv/uv.handler.js',   // Adjust if your paths differ (e.g., '/uv.handler.js')
  client: '/uv/uv.client.js',
  bundle: '/uv/uv.bundle.js',
  config: '/uv/uv.config.js',
  sw: '/uv/uv.sw.js',
};
