import p1 from "../files/pep.webp";
import u1 from "../files/23.jpeg";
import u2 from "../files/25.jpeg";

export const dummyUsers = [
  {
    name: "Robert Downey Junior",
    userName: "@robertdowneyjunior",
    profilePicture: p1,
    posts: [
      {
        user: {
          name: "Robert Downey Junior",
          userName: "@robertdowneyjunior",
          profilePicture: p1,
        },
        time: "12h",
        replies: 67,
        views: 1040,
        pictures: [u1, u2],
        message:
          "Lionel Messi was unveiled by Inter Miami to a sold-out crowd of around 20,000 fans 🏁🦄.... His former teammate Sergio Busquets was also unveiled, after signing a contract for the club until 2025 ✍😍",
      },
    ],
  },
];
