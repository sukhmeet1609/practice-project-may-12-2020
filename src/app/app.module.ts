import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { HeaderComponent } from './course-project/components/header/header.component';
import { RecipesComponent } from './course-project/components/recipes/recipes.component';
import { RecipeListComponent } from './course-project/components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './course-project/components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './course-project/components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './course-project/components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './course-project/components/shopping-list/shopping-edit/shopping-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
