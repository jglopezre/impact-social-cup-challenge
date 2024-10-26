import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { CollaboratorsModule } from './collaborators/collaborators.module';
import { ParticipantsModule } from './participants/participants.module';
import { OpportunitiesModule } from './opportunities/opportunities.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UserTasksModule } from './user-tasks/user-tasks.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'XJS4rIiLkUKhsSa0PSRvYm2g',
      database: 'impact_social',
      entities: [__dirname + '/**/*.entity{.ts, .js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CollaboratorsModule,
    ParticipantsModule,
    OpportunitiesModule,
    UsersModule,
    UserTasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
