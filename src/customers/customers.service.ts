import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {


  constructor( @InjectRepository(Customer) private customerRepo: Repository<Customer>){

  }


  create(data: CreateCustomerDto,
         
    ) {
      const newCustomer = this.customerRepo.create(data);
      return this.customerRepo.save(newCustomer);
    
  }

  findAll() {
    return this.customerRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
