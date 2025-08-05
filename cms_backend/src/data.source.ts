import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { ContactTag } from './contact-tag/entities/contact-tag.entity';
import { Tag } from './tag/entities/tag.entity';
import { Contact } from './contact/entities/contact.entity';
dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities:[Contact,Tag,ContactTag],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false,
});
export default AppDataSource;