declare class spinnies {

	constructor(...args: any[]);

	add(...args: any[]): void;

	bindSigint(...args: any[]): void;

	checkIfActiveSpinners(...args: any[]): void;

	fail(...args: any[]): void;

	hasActiveSpinners(...args: any[]): void;

	loopStream(...args: any[]): void;

	pick(...args: any[]): void;

	remove(...args: any[]): void;

	setRawStreamOutput(...args: any[]): void;

	setSpinnerProperties(...args: any[]): void;

	setStreamOutput(...args: any[]): void;

	stopAll(...args: any[]): void;

	succeed(...args: any[]): void;

	update(...args: any[]): void;

	updateSpinnerState(...args: any[]): void;

	static dashes: {
		frames: string[];
		interval: number;
	};

	static dots: {
		frames: string[];
		interval: number;
	};
}

declare namespace spinnies {
	export enum SpinnerStatus {
		Succeed = 'succeed',
		Fail = 'fail',
		Spinning = 'spinning',
		NonSpinnable = 'non-spinnable',
		Stopped = 'stopped',
	}
}
export = spinnies