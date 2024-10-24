import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OportunityStatus } from './entity';

@Injectable()
export class OpportunitiesService {
  constructor(@InjectRepository(OportunityStatus) private oportunityStatusRepository: Repository<OportunityStatus>) {}

  async onModuleInit() {
    let statuses = await this.oportunityStatusRepository.find();
    
    if (statuses.length === 0) {
      statuses = await this.oportunityStatusRepository.save([
        { name: 'Nueva' },
        { name: 'En Proceso' },
        { name: 'Cerrada' }
      ])
      console.log(statuses);
    }

    
  }
}
