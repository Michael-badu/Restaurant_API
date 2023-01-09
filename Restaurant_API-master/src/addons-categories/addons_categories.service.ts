import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { Addons_category } from "./addons_category.model";

@Injectable()
export class Addons_categoriesService{
    private addons_category: Addons_category [] = [];

    //Add a new category for meal addons
    insertAddons_category(name: string): string {
        const addons_categoryId = uuidv4()
        const newAddons_category = new Addons_category(addons_categoryId, name);
        this.addons_category.push(newAddons_category);
        return addons_categoryId; //Returns the Id of the added a new category for meal addons
    }
}