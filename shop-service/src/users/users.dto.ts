import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    
    @ApiProperty()
    user_name : string;

    //Will be hashed later
    @ApiProperty()
    password : string;

}

export interface User {
    user_name : string;
    password : string;
    mail_address : string;
}