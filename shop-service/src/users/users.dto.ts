import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    
    @ApiProperty()
    readonly id : string;

    @ApiProperty()
    readonly user_name : string;

    //Will be hashed later
    @ApiProperty()
    readonly password : string;

    @ApiProperty()
    readonly mail_address : string;
}
