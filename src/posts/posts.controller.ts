import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PostsService } from './posts.service';
import { PostDocument } from '../models/post.model';

@Controller('posts')
@UseGuards(JwtAuthGuard)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() post: PostDocument, @Req() req) {
    return this.postsService.create(post, req.user);
  }

  @Get()
  async findAll(@Query('limit') limit: number, @Query('page') page: number) {
    limit = limit > 0 ? limit : 10;
    page = page > 0 ? page : 1;
    return this.postsService.findAll(limit, page);
  }
}
