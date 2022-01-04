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
    async findAll(): Promise<Restaurant[]> {
      return await this.RestaurantsModel.findAll({ where: { state: true } });
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Res() res: Response): Promise<any> {
      try {
        const user = await this.RestaurantsModel.findByPk( id );
        return res.json({mensje: 'se creo correctmente', user});
      } catch (error) {
        return res.json({error});
      }
    
  }

  @Post()
  async create(@Req() request: Request, @Res() res: Response): Promise<Restaurant|any> {
    const { name, ubicacion, image, description, state } = request.body;
    if(!name || !ubicacion || !description || !state) return res.status(400).json({error: 'faltan datos'});
    
    try {
      const d = await this.RestaurantsModel.create({name, ubicacion, image, description, state });
      return res.json({mensje: 'se creo correctmente'});
    } catch (error) {
      return res.json({error});
    }
    
  }

  @Put(':id')
  async update(@Param('id') id: string, @Req() request: Request, @Res() res: Response):Promise<Restaurant|any> {
    const { name, ubicacion, image, description, state } = request.body;
    if(!name || !ubicacion || !description || !state) return res.status(400).json({error: 'faltan datos'});
    console.log(id, name, ubicacion, description, state);
    try {
      const d = await this.RestaurantsModel.update({name, ubicacion, description, state} , { where: { id } } );
      return res.json({mensje: 'se ctulizo correctmente'});
    } catch (error) {
      return res.json({error});
    }
    
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() request: Request, @Res() res: Response): Promise<any> {
    console.log('id :>> ', id);
    try {
      const userDelete = await this.RestaurantsModel.update({state: false}, { where: { id } } );
      console.log('userDelete :>> ', userDelete);
      return res.json({user:userDelete});
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
