import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LogPublisherConfigService } from './services/log-publisher-config.service';
import { LogPublisherConfig } from './models/log-publisher-config';
import { LoggerService } from './logger.service';



@NgModule({
  declarations: [/**/],
  imports: [
    HttpClientModule
  ],
  providers: [],
  exports: [/**/]
})
export class LoggerModule {
  static forRoot(config: LogPublisherConfig[]): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        LoggerService,
        {
          provide: LogPublisherConfigService,
          useValue: config
        }
      ]
    }
  }
 }
