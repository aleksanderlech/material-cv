import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ imports: [], providers: [DataService, provideHttpClient(withInterceptorsFromDi())] })
export class ServicesModule {}