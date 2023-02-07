import { InjectionToken } from '@angular/core';
import { LogPublisherConfig } from '../models/log-publisher-config';


export const LogPublisherConfigService = new InjectionToken<LogPublisherConfig>('LogPublisherConfig');
