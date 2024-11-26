const users = require('./data/users');

const getAllUserIds = () => {
  const userIds = users.map((u) => u.id);
  return userIds;
};

const userIds = getAllUserIds();
console.log(userIds);
