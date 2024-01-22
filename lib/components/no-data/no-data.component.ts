import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

export interface NoDataConfig {
	color: string;
	size: 'xs' | 's' | 'm' | 'l';
	type: 'inline' | 'full';
}

@Component({
	selector: 'my-no-data',
	templateUrl: './no-data.component.html',
	styleUrls: ['./no-data.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoDataComponent implements OnChanges {
	static readonly DEFAULT_COLOR = 'white';

	@Input() size: NoDataConfig['size'] = 'xs';
	@Input() color: NoDataConfig['color'] = NoDataComponent.DEFAULT_COLOR;
	@Input() type: NoDataConfig['type'] = 'full';

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.color) {
			this.color = this.color || NoDataComponent.DEFAULT_COLOR;
		}
	}
}
