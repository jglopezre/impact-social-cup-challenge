import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpportunityStatus } from './entities/opportunities.entity';

@Injectable()
export class OpportunitiesService {
  constructor(@InjectRepository(OpportunityStatus) private oportunityStatusRepository: Repository<OpportunityStatus>) {}

  findAll(): Promise<OpportunityStatus[]> {
    return this.oportunityStatusRepository.find();
  }

  findOne(id: number): Promise<OpportunityStatus> {
    return this.oportunityStatusRepository.findOne({
      where: {
        id,
      }
    })
  }

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
