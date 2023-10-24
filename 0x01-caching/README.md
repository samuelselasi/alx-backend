# 0x01. Caching
#### `Back-end`
![cache](https://github.com/samuelselasi/alx-backend/assets/85158665/ef5c5463-1481-4b67-a8fd-e89193f8fbf2)

## Background Context
In this project, you learn different caching algorithms.

## Resources
**Read or watch**:

* [Cache replacement policies - FIFO](https://en.wikipedia.org/wiki/Cache_replacement_policies#First_In_First_Out_%28FIFO%29)
* [Cache replacement policies - LIFO](https://en.wikipedia.org/wiki/Cache_replacement_policies#Last_In_First_Out_%28LIFO%29)
* [Cache replacement policies - LRU](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_Recently_Used_%28LRU%29)
* [Cache replacement policies - MRU](https://en.wikipedia.org/wiki/Cache_replacement_policies#Most_Recently_Used_%28MRU%29)
* [Cache replacement policies - LFU](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least-Frequently_Used_%28LFU%29)

## Requirements
### Python Scripts
* All your files will be interpreted/compiled on Ubuntu `18.04` LTS using `python3` (version `3.7`)
* All your files should end with a new line
* The first line of all your files should be exactly `#!/usr/bin/env python3`
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `pycodestyle` style (version `2.5`)
* All your files must be executable
* The length of your files will be tested using `wc`
* All your modules should have a documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)
* All your classes should have a documentation (`python3 -c 'print(__import__("my_module").MyClass.__doc__)'`)
* All your functions (inside and outside a class) should have a documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'` and `python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)'`)
* A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)

## More Info
### Parent class `BaseCaching`
All your classes must inherit from `BaseCaching` defined below:
```
$ cat base_caching.py
#!/usr/bin/python3
""" BaseCaching module
"""

class BaseCaching():
    """ BaseCaching defines:
      - constants of your caching system
      - where your data are stored (in a dictionary)
    """
    MAX_ITEMS = 4

    def __init__(self):
        """ Initiliaze
        """
        self.cache_data = {}

    def print_cache(self):
        """ Print the cache
        """
        print("Current cache:")
        for key in sorted(self.cache_data.keys()):
            print("{}: {}".format(key, self.cache_data.get(key)))

    def put(self, key, item):
        """ Add an item in the cache
        """
        raise NotImplementedError("put must be implemented in your cache class")

    def get(self, key):
        """ Get an item by key
        """
        raise NotImplementedError("get must be implemented in your cache class")
```

## Tasks

[0. Basic dictionary](./0-basic_cache.py)

Create a class `BasicCache` that inherits from `BaseCaching` and is a caching system:

* You must use `self.cache_data` - dictionary from the parent class `BaseCaching`
* This caching system doesn’t have limit
* `def put(self, key, item):`
	* Must assign to the dictionary `self.cache_data` the `item` value for the key `key`.
	* If `key` or `item` is `None`, this method should not do anything.
* `def get(self, key):`
	* Must return the value in `self.cache_data` linked to `key`.
	* If `key` is `None` or if the `key` doesn’t exist in `self.cache_data`, return `None`.

```
guillaume@ubuntu:~/0x01$ cat 0-main.py
#!/usr/bin/python3
""" 0-main """
BasicCache = __import__('0-basic_cache').BasicCache

my_cache = BasicCache()
my_cache.print_cache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.print_cache()
print(my_cache.get("A"))
print(my_cache.get("B"))
print(my_cache.get("C"))
print(my_cache.get("D"))
my_cache.print_cache()
my_cache.put("D", "School")
my_cache.put("E", "Battery")
my_cache.put("A", "Street")
my_cache.print_cache()
print(my_cache.get("A"))

guillaume@ubuntu:~/0x01$ ./0-main.py
Current cache:
Current cache:
A: Hello
B: World
C: Holberton
Hello
World
Holberton
None
Current cache:
A: Hello
B: World
C: Holberton
Current cache:
A: Street
B: World
C: Holberton
D: School
E: Battery
Street
guillaume@ubuntu:~/0x01$
```

[1. FIFO caching](./1-fifo_cache.py)

Create a class `FIFOCache` that inherits from `BaseCaching` and is a caching system:

* You must use `self.cache_data` - dictionary from the parent class `BaseCaching`
* You can overload `def __init__(self):` but don’t forget to call the parent init: `super().__init__()`
* `def put(self, key, item):
	* Must assign to the dictionary `self.cache_data` the `item` value for the key `key`.
	* If `key` or `item` is `None`, this method should not do anything.
	* If the number of items in `self.cache_data` is higher that `BaseCaching.MAX_ITEMS`:
		* you must discard the first item put in cache (FIFO algorithm)
		* you must print `DISCARD`: with the `key` discarded and following by a new line
* `def get(self, key):`
	* Must return the value in `self.cache_data` linked to `key`.
	* If `key` is `None` or if the key doesn’t exist in `self.cache_data`, return `None`.
```
guillaume@ubuntu:~/0x01$ cat 1-main.py
#!/usr/bin/python3
""" 1-main """
FIFOCache = __import__('1-fifo_cache').FIFOCache

my_cache = FIFOCache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.put("D", "School")
my_cache.print_cache()
my_cache.put("E", "Battery")
my_cache.print_cache()
my_cache.put("C", "Street")
my_cache.print_cache()
my_cache.put("F", "Mission")
my_cache.print_cache()

guillaume@ubuntu:~/0x01$ ./1-main.py
Current cache:
A: Hello
B: World
C: Holberton
D: School
DISCARD: A
Current cache:
B: World
C: Holberton
D: School
E: Battery
Current cache:
B: World
C: Street
D: School
E: Battery
DISCARD: B
Current cache:
C: Street
D: School
E: Battery
F: Mission
guillaume@ubuntu:~/0x01$
```

[2. LIFO Caching](./2-lifo_cache.py)

Create a class `LIFOCache` that inherits from `BaseCaching` and is a caching system:

* You must use `self.cache_data` - dictionary from the parent class `BaseCaching`
* You can overload `def __init__(self):` but don’t forget to call the parent init: `super().__init__()`
* `def put(self, key, item):`
	* Must assign to the dictionary `self.cache_data` the `item` value for the key `key`.
	* If `key` or `item` is `None`, this method should not do anything.
	* If the number of items in `self.cache_data` is higher that `BaseCaching.MAX_ITEMS`:
		* you must discard the last `item` put in cache (LIFO algorithm)
		* you must print `DISCARD`: with the `key` discarded and following by a new line
* `def get(self, key)`:
	* Must return the value in `self.cache_data` linked to `key`.
	* If `key` is `None` or if the key doesn’t exist in `self.cache_data`, return `None`.

```
guillaume@ubuntu:~/0x01$ cat 2-main.py
#!/usr/bin/python3
""" 2-main """
LIFOCache = __import__('2-lifo_cache').LIFOCache

my_cache = LIFOCache()
my_cache.put("A", "Hello")
my_cache.put("B", "World")
my_cache.put("C", "Holberton")
my_cache.put("D", "School")
my_cache.print_cache()
my_cache.put("E", "Battery")
my_cache.print_cache()
my_cache.put("C", "Street")
my_cache.print_cache()
my_cache.put("F", "Mission")
my_cache.print_cache()
my_cache.put("G", "San Francisco")
my_cache.print_cache()

guillaume@ubuntu:~/0x01$ ./2-main.py
Current cache:
A: Hello
B: World
C: Holberton
D: School
DISCARD: D
Current cache:
A: Hello
B: World
C: Holberton
E: Battery
Current cache:
A: Hello
B: World
C: Street
E: Battery
DISCARD: C
Current cache:
A: Hello
B: World
E: Battery
F: Mission
DISCARD: F
Current cache:
A: Hello
B: World
E: Battery
G: San Francisco
guillaume@ubuntu:~/0x01$
```
