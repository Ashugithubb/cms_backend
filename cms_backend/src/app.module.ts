import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { TagModule } from './tag/tag.module';
import { ContactTagModule } from './contact-tag/contact-tag.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),ContactModule, TagModule, ContactTagModule,TypeOrmModule.forRootAsync(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
