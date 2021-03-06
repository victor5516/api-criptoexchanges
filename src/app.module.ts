import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { enviroments } from './enviroments';
import { CustomersModule } from './customers/customers.module';
import { DatabaseModule } from './database/database.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
     }),
    CustomersModule,
    DatabaseModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
