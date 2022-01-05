/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Restaurant } from './interfaces/restaurant';
import { Restaurants } from './resturnts.entity';
import { Request, Response } from 'express';
import { UpdateOptions } from 'sequelize';
import { WsS3Service } from './ws-s3/ws-s3.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('restaurants')
export class RestaurantsController {
  constructor(
    @InjectModel(Restaurants)
        private RestaurantsModel: typeof Restaurants,
        private wsS3Service: WsS3Service,
        
  ) {}

    @Get()
    async findAll(@Res() res: Response): Promise<Restaurant[]|any> {
      try {
        
        const restaurants = await this.RestaurantsModel.findAll();
        res.json(restaurants);
      } catch (error) {
        return res.status(400).json({mensje:'no se encuentrs el restaurante', error});
      }
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Res() res: Response): Promise<any> {
      try {
        const restaurant = await this.RestaurantsModel.findByPk( id );
        return res.json(restaurant);
      } catch (error) {
        return res.status(400).json({mensje:'no se encuentrs el restaurante', error});
      }
    
  }

  @Post()
  async create(@Req() request: Request, @Res() res: Response): Promise<Restaurant|any> {
    const { name, ubicacion, description, state = true } = request.body;
    if(!name || !ubicacion || !description) return res.status(400).json({error: 'faltan datos'});
    
    try {
      const d = await this.RestaurantsModel.create({name, ubicacion, description, state });
      return res.json({mensje: 'se creo correctmente',restaurant: d});
    } catch (error) {
      return res.status(400).json({error, mensje: 'no se pudo crer el restaurant'});
    }
    
  }

  @Put(':id')
  async update(@Param('id') id: string, @Req() request: Request, @Res() res: Response):Promise<Restaurant|any> {
    const { name, ubicacion, description, state } = request.body;
    if(!name || !ubicacion || !description) return res.status(400).json({error: 'faltan datos'});
    console.log(id, name, ubicacion, description);
    try {
      const d = await this.RestaurantsModel.update({name, ubicacion, description, state} , { where: { id } } );
      return res.json({mensje: 'se ctulizo correctmente'});
    } catch (error) {
      return res.status(400).json({error});
    }
    
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() request: Request, @Res() res: Response): Promise<any> {
    console.log('id :>> ', id);
    try {
      const userDelete = await this.RestaurantsModel.destroy({where: { id }});
      // const userDelete = await this.RestaurantsModel.update({state: false}, { where: { id } } );
      console.log('userDelete :>> ', userDelete);
      return res.json({mensje: 'se elimino correctmente'});
    } catch (error) {
      return res.status(400).json({error});
    }
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
