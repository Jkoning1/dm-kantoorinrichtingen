import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import payload from 'payload';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET!,
    mongoURL: process.env.DATABASE_URI || 'mongodb://localhost:27017/dm-kantoorinrichtingen',
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin: ${payload.getAdminURL()}`);
    },
  });

  app.use('/media', express.static(path.resolve(__dirname, '../media')));
  app.use(express.static(path.resolve(__dirname, '../../public')));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/admin')) return next();
    res.sendFile(path.resolve(__dirname, '../../public/index.html'));
  });

  app.listen(PORT, () => {
    payload.logger.info(`Server gestart op http://localhost:${PORT}`);
  });
};

start().catch((err) => {
  console.error('Server start mislukt:', err);
  process.exit(1);
});
