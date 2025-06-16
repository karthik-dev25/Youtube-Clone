export function nthPrime(n) {
  var P = 0;

  function isPrime(x) {
    var isPrime = true;

    for (var d = 2; d <= Math.sqrt(x); d++) {
      if ((x / d) % 1 == 0) {
        isPrime = false;
        break;
      }
    }

    return isPrime;
  }

  for (var i = 1; 0 < n; i++) {
    if (isPrime(i)) {
      P = i;
      n--;
    }

    // we can skip the even numbers
    if (3 <= i) {
      i++;
    }
  }

  return P;
}

export const sideBarList1 = [
  {
    key: 1,
    value: "Home",
  },
  {
    key: 2,
    value: "Shorts",
  },
  {
    key: 3,
    value: "Subscriptions",
  },
];
export const sideBarList2 = [
  {
    key: 4,
    value: "History",
  },
  {
    key: 5,
    value: "Playlist",
  },
  {
    key: 6,
    value: "Your Videos",
  },
  {
    key: 7,
    value: "Watch Later",
  },
  {
    key: 8,
    value: "Liked Videos",
  },
];
export const sideBarList3 = [
  {
    key: 9,
    value: "Trending",
  },
  {
    key: 10,
    value: "Shopping",
  },
  {
    key: 11,
    value: "Music",
  },
  {
    key: 12,
    value: "Films",
  },
  {
    key: 13,
    value: "Live",
  },
  {
    key: 14,
    value: "Gaming",
  },
  {
    key: 15,
    value: "News",
  },
  {
    key: 16,
    value: "Sports",
  },
  {
    key: 17,
    value: "Courses",
  },
  {
    key: 18,
    value: "Podcast",
  },
];
