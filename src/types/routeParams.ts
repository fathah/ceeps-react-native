export type RootStackParamList = {
  Index: undefined; // The Home screen expects no parameters.
  StoryView: {username: string}; // The StoryView screen expects a `username` parameter of type `string`.
};
