import { orders } from "./data/orders";
import { users } from "./data/users";
import { Item, Order, User } from "./types/types";

const getAllUserIds = (): string[] => {
  const userIds: string[] = users.map((u: User) => u.id);
  return userIds;
};

const getTotalAmountOrdered = () => {
  const totalAmount: number = orders.reduce(
    (accumulator: number, order: Order) => {
      return order.total + accumulator;
    },
    0
  );
  return totalAmount;
};

const getTotalCountItemsOrdered = (): number => {
  let allItems: Item[] = []
  orders.map((o: Order) => {
    const items = o.items;
    items.map((i: Item) => {
      allItems.push(i)
    });
  });
  const totalCount: number = allItems.reduce(
    (accumulator: number, item: Item) => {
      return item.count + accumulator;
    },
    0
  );
  return totalCount;
};

const userIds = getAllUserIds();
console.log(userIds);

const totalAmount = getTotalAmountOrdered();
console.log(totalAmount);

console.log(getTotalCountItemsOrdered());
