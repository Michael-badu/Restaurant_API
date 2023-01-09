import { Module } from "@nestjs/common";
import { Addons_categoriesContoller } from "./addons_categories.controller";
import { Addons_categoriesService } from "./addons_categories.service";

@Module({
    controllers: [Addons_categoriesContoller],
    providers: [Addons_categoriesService],
})

export class Addons_categoriesModule {}