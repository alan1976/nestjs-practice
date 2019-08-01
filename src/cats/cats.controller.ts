import {
  Controller,
  Get,
  Req,
  Post,
  Request,
  HttpCode,
  Res,
  Body,
  Param,
} from '@nestjs/common';

import { Response } from 'express';
import { CreateCatDto } from './create-cat.dto';
@Controller('cats')
export class CatsController {
  @Get('api')
  @HttpCode(200)
  responseHandler(@Res() response: Response): any {
    response.status(200).send({
      message: 'I am Ok',
    });
  }

  @Get()
  fetchHandler(@Req() request: Request): string {
    return 'return all cats';
  }

  @Post()
  @HttpCode(202)
  createHandler(@Request() request: Request): any {
    return {
      req: request.body,
      message: 'Data Inserted into database',
    };
  }

  @Get(':id')
  paramHandler(@Param() params): any {
    return {
      message: `This action returns a #${params.id} cat`,
    };
  }

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   return 'This action adds a new cat';
  // }
  @Post('/body')
  async create(@Body() createCatDto: CreateCatDto) {
    return {
      message: req.body,
    };
  }
}
