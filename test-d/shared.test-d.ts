import {type MenuItemConstructorOptions} from 'electron';
import {expectType, expectError} from 'tsd';
import {
	is,
	chromeVersion,
	platform,
	runJS,
	disableZoom,
	appLaunchTimestamp,
	openNewGitHubIssue,
	openUrlMenuItem,
	openSystemPreferences,
} from '../src/shared';

expectType<boolean>(is.macos);
expectType<string>(chromeVersion);

expectType<number | string | undefined>(
	platform({
		macos: 1,
		default: () => 'test',
	}),
);

expectError(platform({}));
expectError(platform({default: 1}));

expectType<Promise<void>>(runJS('a=1'));

expectType<void>(disableZoom());
expectType<number>(appLaunchTimestamp);

expectType<void>(
	openNewGitHubIssue({user: 'sindresorhus', repo: 'electron-util'}),
);
expectType<MenuItemConstructorOptions>(
	openUrlMenuItem({url: 'https://sindresorhus.com'}),
);

expectError(openSystemPreferences());
expectType<Promise<void>>(
	openSystemPreferences('security', 'Privacy_Microphone'),
);
expectError(openSystemPreferences('security', 'Bad_Section'));
expectType<Promise<void>>(openSystemPreferences('windowsupdate'));
expectError(openSystemPreferences('windowsupdate', 'Non_Existent_Section'));
