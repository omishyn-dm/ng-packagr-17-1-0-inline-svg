import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoDataComponent} from './no-data.component';

export * from './no-data.component';

@NgModule({
	imports: [CommonModule],
	exports: [NoDataComponent],
	declarations: [NoDataComponent],
})
export class NoDataModule {
	public static forRoot(): ModuleWithProviders<NoDataModule> {
		return {
			ngModule: NoDataModule,
			providers: [],
		};
	}
}
