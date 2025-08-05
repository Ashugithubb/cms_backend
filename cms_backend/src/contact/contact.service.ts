import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
  constructor(@InjectRepository(Contact) private readonly contactRepositry: Repository<Contact>) { }

  async create(createContactDto: CreateContactDto) {
    const { contactNumber } = createContactDto
    const existing = await this.contactRepositry.findOne({
      where: { contactNumber }
    })
    return await this.contactRepositry.save(createContactDto);
  }
  
  async findAll() {
    return await this.contactRepositry.find();
  }

  
  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}

// import { In } from "typeorm";

// // ... inside your service or controller

// const userIdsToFind = [1, 5, 10]; // An array of IDs

// const users = await userRepository.find({
//   where: {
//     id: In(userIdsToFind), // Finds users where the 'id' is one of the values in 'userIdsToFind'
//   },
// });