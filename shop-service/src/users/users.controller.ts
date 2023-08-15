import { Controller, Get, Post, Delete, Param, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  getUser(@Param('id') id: string): Promise<any> {
    return this.usersService.getUser(id);
  }

  @Get('images/:id')
  async getImage(@Param('id') id: string): Promise<Buffer> {
    return await this.usersService.getImage(id);
  }

  @Post()
  async createUser(@Body() user: any): Promise<any> {
    return await this.usersService.createUser(user);
  }

  @Post('images/:id')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@Param('id') id: string, @UploadedFile() image: Express.Multer.File): Promise<string> {
    const imageBuffer = image.buffer;
    return await this.usersService.uploadImage(id, imageBuffer);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    return await this.usersService.deleteUser(id);
  }

  @Delete('images/:id')
  async deleteImage(@Param('id') id: string): Promise<void> {
    await this.usersService.deleteImage(id);
  }
}
