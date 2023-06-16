export const resolvers = {
  Query: {
    jobs: () => {
      return [
        {
          id: 'test-id-1', // NULLABLE
          title: 'the Title 1',
          description: 'The description.',
        },
        {
          id: 'test-id-2', // NULLABLE
          title: 'the Title 2',
          description: 'The description.',
          extraProp: 'hello', // If not part of the squema it gets ignored
        },
        // null,
      ];
    },
  },
};
