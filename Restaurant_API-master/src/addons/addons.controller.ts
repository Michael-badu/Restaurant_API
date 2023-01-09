import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
  Post,
  Patch,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AddonsService } from './addons.service';
import { AddonsModel } from '../database/models/addons.model';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('/brands/:brandId/addons')
export class AddonsController {
  constructor(private addonsService: AddonsService) {}

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get()
  async findAll() {
    return this.addonsService.findAllAddons();
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.addonsService.findOneAddon(id);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Post()
  async create(@Body() props: Partial<AddonsModel>) {
    return this.addonsService.createAddons(props);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Delete(':id')
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    return this.addonsService.deleteAddon(id);
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Patch(':id')
  async update(@Param('id', new ParseIntPipe()) id: number,
    @Body() props: Partial<AddonsModel>,
  ) {
    return this.addonsService.updateAddon(id, props);
  }
}
