import { v4 as uuidv4 } from "uuid";
export const articles = [
  {
    id: 1,
    title: "",
    body: "",
    image: "",
  },
];

export const commentsData = [
  {
    id: uuidv4(),
    name: "test1",
    comment: "test1",
    child: [
      {
        id: uuidv4(),
        name: "test1a",
        comment: "test1a",
        child: [
          {
            id: uuidv4(),
            name: "test1b",
            comment: "test1b",
            child: [],
          },
          {
            id: uuidv4(),
            name: "test1c",
            comment: "test1c",
            child: [
              {
                id: uuidv4(),
                name: "test1d",
                comment: "test1d",
                child: [
                  {
                    id: uuidv4(),
                    name: "test1d",
                    comment: "test1d",
                    child: [
                      {
                        id: uuidv4(),
                        name: "test1d",
                        comment: "test1d",
                        child: [
                          {
                            id: uuidv4(),
                            name: "test1d",
                            comment: "test1d",
                            child: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "test2",
    comment: "test2",
    child: [],
  },
];
