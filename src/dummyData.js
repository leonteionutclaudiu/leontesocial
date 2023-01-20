const Users = [
  {
    id: 1,
    profilePicture:
      'https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?h=350&auto=compress&cs=tinysrgb',
    username: 'Safak Kocaoglu',
  },
  {
    id: 2,
    profilePicture:
      'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    username: 'Janell Shrum',
  },
  {
    id: 3,
    profilePicture: 'https://randomuser.me/api/portraits/men/52.jpg',
    username: 'Alex Durden',
  },
  {
    id: 4,
    profilePicture:
      'https://images.pexels.com/photos/531126/pexels-photo-531126.jpeg?h=350&auto=compress&cs=tinysrgb',
    username: 'Dora Hawks',
  },
  {
    id: 5,
    profilePicture:
      'https://images.unsplash.com/photo-1503593245033-a040be3f3c82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=ca8c652b62b1f14c9c4c969289a8b33c',
    username: 'Thomas Holden',
  },
  {
    id: 6,
    profilePicture:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    username: 'Shirley Beauchamp',
  },
  {
    id: 7,
    profilePicture: 'https://randomuser.me/api/portraits/men/36.jpg',
    username: 'Travis Bennett',
  },
  {
    id: 8,
    profilePicture: 'https://randomuser.me/api/portraits/men/46.jpg',
    username: 'Christian Thomas',
  },
  {
    id: 9,
    profilePicture: 'https://randomuser.me/api/portraits/women/95.jpg',
    username: 'Daiana Paulo',
  },
  {
    id: 10,
    profilePicture:
      'https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3422df4a46d2c81c35bf4687a2fa9c52',
    username: 'Iulius Alvarez',
  },
  {
    id: 11,
    profilePicture: 'https://randomuser.me/api/portraits/men/23.jpg',
    username: 'Alexius Pavalic',
  },
];

const Posts = [
  {
    id: 1,
    desc: 'Love For All, Hatred For None.',
    photo: 'assets/post/1.jpeg',
    date: '5 mins ago',
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    photo: 'assets/post/2.jpeg',
    date: '15 mins ago',
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: 'Every moment is a fresh beginning.',
    photo: 'assets/post/3.jpeg',
    date: '1 hour ago',
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    photo: 'assets/post/4.jpeg',
    date: '4 hours ago',
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    photo: 'assets/post/5.jpeg',
    date: '5 hours ago',
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    photo: 'assets/post/6.jpeg',
    date: '1 day ago',
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: 'Never regret anything that made you smile.',
    photo: 'assets/post/7.jpeg',
    date: '2 days ago',
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    photo: 'assets/post/8.jpeg',
    date: '3 days ago',
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: 'Change the world by being yourself.',
    photo: 'assets/post/9.jpeg',
    date: '5 days ago',
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    photo: 'assets/post/10.jpeg',
    date: '1 week ago',
    userId: 10,
    like: 104,
    comment: 12,
  },
  {
    id: 11,
    desc: 'Congratulations Argentina !!! ⚽',
    date: '2 weeks ago',
    userId: 11,
    like: 129,
    comment: 0,
  },
];

export { Users, Posts };
