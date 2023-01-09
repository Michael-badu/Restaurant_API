import { Controller, Post, Body } from "@nestjs/common";
import { Addons_categoriesService } from "./addons_categories.service";

@Controller('/brands/:brandid/addon-categories')
export class Addons_categoriesContoller {
    constructor(private readonly addons_categoriesService: Addons_categoriesService) {}
    
    
    @Post() // Creates a new category for meal addons for the specified brand
    addAddons_categories(
        @Body('name') addons_categoryName: string,
    ): any {
        const gottenId = this.addons_categoriesService.insertAddons_category(
            addons_categoryName
        );
        return { id: gottenId }; //Retuns Id on new category for meal addons for the specified brand
    }
}
