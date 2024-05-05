It’s important for `hash functions` to consistently return the same output
for the same input. If they don’t, you won’t be able to find your item
after you put it in the hash table!
Which of these hash functions are consistent?

>5.1 f(x) = 1 Returns “1” for all input `consistent`
> 
>5.2 f(x) = rand() Returns a random number every time `not consistent`
> 
> 5.3 f(x) = next_empty_slot() `not consistent`
> 
> 5.4 f(x) = len(x) `consistent`

```It’s important for hash functions to have a good distribution. They
should map items as broadly as possible. The worst case is a hash
function that maps all items to the same slot in the hash table.
Suppose you have these four hash functions that work with strings:

a. Return “1” for all input.

b. Use the length of the string as the index.

c. Use the first character of the string as the index. So, all strings
starting with a are hashed together, and so on.

d. Map every letter to a prime number: a = 2, b = 3, c = 5, d = 7,
e = 11, and so on. For a string, the hash function is the sum of all
the characters modulo the size of the hash. For example, if your
hash size is 10, and the string is “bag”, the index is 3 + 2 + 17 %
10 = 22 % 10 = 2.

For each of these examples, which hash functions would provide a good
distribution? Assume a hash table size of 10 slots.
```

>`a` is not ideal cuz it will insert all item into 1 slot so it will make liked list for all element


5.5 A phonebook where the keys are names and values are phone
numbers. The names are as follows: Esther, Ben, Bob, and Dan.
>hash function latter `d` will be good in this case

5.6 A mapping from battery size to power. The sizes are A, AA, AAA,
and AAAA.

>hash function latter `b` cuz the name depend only on the length of the string too 

5.7 A mapping from book titles to authors. The titles are Maus, Fun
Home, and Watchmen.

>all those words start with diff char so make hash function letter  `c` will  
