import {Screens, Tabs} from './screens';

export type StackParamList = {
  [Screens.TABS]: undefined;
  [Screens.INDEX_PAGE]: undefined;
  [Screens.STORY_VIEW_PAGE]: {username: string};
  [Screens.MODAL]: undefined;
};

export type TabParamList = {
  [Tabs.HOME]: undefined;
  [Tabs.BROADCAST]: undefined;
  [Tabs.WHISPER]: undefined;
  [Tabs.WALL]: undefined;
};
