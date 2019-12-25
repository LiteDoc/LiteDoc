export default {
  blocks: [
    {
      text:
        'This is an "immutable" entity: Superman. Deleting any ' +
        "characters will delete the entire entity. Adding characters " +
        "will remove the entity from the range.",
      type: "unstyled",
      entityRanges: [{ offset: 31, length: 8, key: "token" }]
    },
    {
      text: "",
      type: "unstyled"
    },
    {
      text:
        'This is a "mutable" entity: Batman. Characters may be added ' +
        "and removed.",
      type: "unstyled",
      entityRanges: [{ offset: 28, length: 6, key: "token" }]
    },
    {
      text: "",
      type: "unstyled"
    },
    {
      text:
        'This is a "segmentedgmented" entity: Green Lantern. Deleting any characters will delete the current "seggmented" entity: Green Lantern. Deleting any characters will delete the current "seggmented" entity: Green Lantern. Deleting any characters will delete the current "seggmented" entity: Green Lantern. Deleting any characters will delete the current "seggmented" entity: Green Lantern. Deleting any characters will delete the current "seg" entity: Green Lantern. Deleting any characters will delete the current "segment" from the range. Adding characters will remove the entire entity from the range.',
      type: "unstyled",
      entityRanges: [{ offset: 30, length: 500, key: "token" }]
    }
  ],

  entityMap: {
    token: {
      type: "TOKEN",
      mutability: "MUTABLE"
    }
  }
};
