2.1 Suppose you’re building an app to keep track of your finances.

1. GROCERIES
2. MOVIE
3. SFBC MEMBERSHIP

Every day, you write down everything you spent money on. At the
end of the month, you review your expenses and sum up how much
you spent. So, you have lots of inserts and a few reads. Should
you use an array or a list?

> Linked List


2.2 Suppose you’re building an app for restaurants to take customer
orders. Your app needs to store a list of orders. Servers keep adding
orders to this list, and chefs take orders off the list and make them.
It’s an order queue: servers add orders to the back of the queue, and
the chef takes the first order off the queue and cooks it.

> Linked List

2.3 Let’s run a thought experiment. Suppose Facebook keeps a list of
usernames. When someone tries to log in to Facebook, a search is
done for their username. If their name is in the list of usernames,
they can log in. People log in to Facebook pretty often, so there are
a lot of searches through this list of usernames. Suppose Facebook
uses binary search to search the list. Binary search needs random
access—you need to be able to get to the middle of the list of
usernames instantly. Knowing this, would you implement the list
as an array or a linked list?

> Array

2.4 People sign up for Facebook pretty often, too. Suppose you decided
to use an array to store the list of users. What are the downsides
of an array for inserts? In particular, suppose you’re using binary
search to search for logins. What happens when you add new users
to an array?
> maybe failed to insert cuz no available space and if i use binary search i have to sort the array so it will
> take `O(n)` and if i inserting in the middle it will shift all sub

2.5 In reality, Facebook uses neither an array nor a linked list to store
user information. Let’s consider a hybrid data structure: an array
of linked lists. You have an array with 26 slots. Each slot points to a
linked list. For example, the first slot in the array points to a linked
list containing all the usernames starting with a. The second slot
points to a linked list containing all the usernames starting with b,
and so on.

Suppose Adit B signs up for Facebook, and you want to add them
to the list. You go to slot 1 in the array, go to the linked list for slot
1, and add Adit B at the end. Now, suppose you want to search for
Zakhir H. You go to slot 26, which points to a linked list of all the
Z names. Then you search through that list to find Zakhir H.

> 26

Compare this hybrid data structure to arrays and linked lists. Is it
slower or faster than each for searching and inserting? You don’t
have to give Big O run times, just whether the new data structure
would be faster or slower.

> lets compare from multiple aspects
> first the insertion if i want to insert in the Bs i will directly go to the index 2 and insert and i can make the
> index 2 alphabetically indexed too so i decrease the times to go through the linked list or array to see where to insert
> and then make liked list and insert so it will take `O(1)` for accessing and `O(1)` for inserting
> so `yeah it will be faster`



