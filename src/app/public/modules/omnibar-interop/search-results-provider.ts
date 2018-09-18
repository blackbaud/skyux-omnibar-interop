import {
  Injectable
} from '@angular/core';

@Injectable()
export abstract class SkyAppSearchResultsProvider {

  public abstract getSearchResults(searchArgs: { searchText: string }): Promise<any>;

}
