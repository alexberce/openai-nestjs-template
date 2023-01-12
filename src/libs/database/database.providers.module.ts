import { Module } from '@nestjs/common';

import { MongoDatabaseModule } from './mongo';

@Module({
  imports: [MongoDatabaseModule],
  exports: [MongoDatabaseModule],
})

export class DatabaseProvidersModule {}
