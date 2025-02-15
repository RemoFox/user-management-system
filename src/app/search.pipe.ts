import { Pipe, PipeTransform } from '@angular/core';
import { Searchlist } from './interfaces/searchlist';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: Searchlist[], searchItems:string): Searchlist[] {
    return users.filter((user)=>user.firstName.toLowerCase().includes(searchItems.toLocaleLowerCase()));
  }

}
