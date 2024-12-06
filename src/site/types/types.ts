export interface Item{
 id: string;
 name: string;
 price: string;
 count: number;
}

export interface Order {
    user: string;
    items: Item[];
    total: number;
    time: string;
}

export interface Product {
id: string;
name: string;
price: string;
description: string;
category: string;
rating: number;
numReviews: number;
countInStock: number;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}