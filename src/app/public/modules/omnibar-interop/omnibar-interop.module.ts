import {
  NgModule
} from '@angular/core';

import {
  SkyAppOmnibarProvider
} from './omnibar-provider';

import {
  SkyAppSearchResultsProvider
} from './search-results-provider';

@NgModule({
  providers: [
    {
      provide: SkyAppOmnibarProvider,
      useValue: {}
    },
    {
      provide: SkyAppSearchResultsProvider,
      useValue: {}
    }
  ]
})
export class SkyOmnibarInteropModule { }
