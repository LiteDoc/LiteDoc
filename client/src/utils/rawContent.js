export default {
  blocks: [
    {
      key: 0,
      text:
        'This is an "immutable" entity: Superman. Deleting any ' +
        "characters will delete the entire entity. Adding characters " +
        "will remove the entity from the range.",
      type: "user"
    }
  ],
  entityMap: {
    token: {
      type: "TOKEN",
      mutability: "MUTABLE"
    }
  }
};
