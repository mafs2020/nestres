/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Req, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Restaurant } from './interfaces/restaurant';
import { Restaurants } from './resturnts.entity';
import { Request, Response } from 'express';
import { UpdateOptions } from 'sequelize';
import { WsS3Service } from './ws-s3/ws-s3.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { RestaurantsDTO } from './validator/validator';
import { validate } from 'class-validator';
import { RestaurantService } from './restaurant/restaurant.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(
    @InjectModel(Restaurants)
        private RestaurantsModel: typeof Restaurants,
        private wsS3Service: WsS3Service,
        private readonly restaurantService: RestaurantService
        
  ) {}

    @Get()
    async findAll(): Promise<Restaurant[]|any> {
      return await this.restaurantService.findAll();
      
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<any> {
      return await this.restaurantService.findOne(+id);
      // try {
      //   const restaurant = await this.RestaurantsModel.findByPk( id );
      //   return res.json(restaurant);
      // } catch (error) {
      //   return res.status(400).json({mensje:'no se encuentrs el restaurante', error});
      // }
    
  }

  @Post()
  @UsePipes(new ValidationPipe())
  // @Req() request: Request, 
  // @Res() res: Response
  async create(@Body() restaurantsDTO: RestaurantsDTO): Promise<Restaurant|any> {
    // const { name, ubicacion, description, state = true } = request.body;
    console.log('restaurantsDTO :>> ', restaurantsDTO);
    return await this.restaurantService.create(restaurantsDTO as Restaurant);
    
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() restaurantsDTO: RestaurantsDTO):Promise<Restaurant|any> {
    return await this.restaurantService.update(+id, restaurantsDTO as Restaurant);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    console.log('id :>> ', id);
      return await this.restaurantService.remove(+id);
      // const userDelete = await this.RestaurantsModel.update({state: false}, { where: { id } } );
  }

  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@Param('id') id: string, @UploadedFile() file: Express.Multer.File, @Res() res: Response): Promise<Restaurant|any> {
    console.log('id :>> ', id);
    try {
      // Promise.all([])
      const loction = await this.wsS3Service.uploadFile(file);

      await this.RestaurantsModel.update({ image: loction }, { where: { id } } );
      
      return res.json({mensje: 'se gurrdo imagen'});
    } catch (error) {
      return res.status(400).json({error});
      
    }
    
    
  }

  //   @Patch(':id')
  // updateCat(
  //   @Body() body: UpdateCatDTO,
  //   @Param() params: UpdateCatParams,
  //   @Query() query: UpdateCatQuery,
  // ) {
  //   return this.catsService.updateCat(body, params, query);
  // }
}
