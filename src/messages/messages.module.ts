import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import {MessagesRepositoty} from './messages.repository'
import {MessagesService} from './messages.service'

@Module({
  controllers: [MessagesController],
  providers: [MessagesRepositoty, MessagesService]
})
export class MessagesModule {}
