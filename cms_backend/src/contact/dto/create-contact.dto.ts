import { IsString } from "class-validator";

export class CreateContactDto {
    @IsString()
     contactName:string

     @IsString()
     contactNumber:string
}
