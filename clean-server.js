const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = 3001;
const outDir = path.join(__dirname, 'out');

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm',
  '.webm': 'video/webm'
};

const server = http.createServer((req, res) => {
  // Disable service worker
  if (req.url === '/service-worker.js' || req.url.includes('workbox')) {
    res.writeHead(404);
    res.end();
    return;
  }

  // Parse URL
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;

  // Default to index.html
  if (pathname === '/') {
    pathname = '/index.html';
  }

  // Security headers to disable service worker
  res.setHeader('Service-Worker-Allowed', '/');
  res.setHeader('Clear-Site-Data', '"cache", "storage"');

  const filePath = path.join(outDir, pathname);
  const ext = path.parse(filePath).ext;
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  // Serve file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server error');
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(`Clean server running at http://localhost:${port}`);
  console.log('No service worker interference!');
});
