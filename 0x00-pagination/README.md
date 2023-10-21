# 0x00. Pagination
#### `Back-end`
![3646eb02de6527ca5d83](https://github.com/samuelselasi/alx-backend/assets/85158665/3590324b-05de-4f98-950a-7f7f93c8b10b)
![746187b76bea1f46030e](https://github.com/samuelselasi/alx-backend/assets/85158665/617fd6ce-132e-45a1-8a6d-160e2909776e)
![665ce871c2ecc66a8e71](https://github.com/samuelselasi/alx-backend/assets/85158665/22608507-b37d-4dde-8479-33f21db77bf8)

## Resources
**Read or watch**:

* [REST API Design: Pagination](https://www.moesif.com/blog/technical/api-design/REST-API-Design-Filtering-Sorting-and-Pagination/#pagination)
* [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS)

## Requirements
* All your files will be interpreted/compiled on Ubuntu `18.04` LTS using `python3` (version `3.7`)
* All your files should end with a new line
* The first line of all your files should be exactly `#!/usr/bin/env python3`
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `pycodestyle` style (version `2.5.*`)
* The length of your files will be tested using `wc`
* All your modules should have a documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)
* All your functions should have a documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'`
* A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)
* All your functions and coroutines must be type-annotated.

# Setup: `Popular_Baby_Names.csv`
[use this data file](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/misc/2020/5/7d3576d97e7560ae85135cc214ffe2b3412c51d7.csv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20231020%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231020T201852Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4605f7aba8ca2e1e22d76a362cd78177ee2fcb64119851ac56d96e6f195ac3d9) for your project

## Tasks

[0. Simple helper function](./0-simple_helper_function.py)

Write a function named `index_range` that takes two integer arguments `page` and `page_size`.

The function should return a tuple of size two containing a `start index` and an `end index` corresponding to the range of indexes to return in a list for those particular pagination parameters.

Page numbers are 1-indexed, i.e. the first page is page `1`.
```
bob@dylan:~$ cat 0-main.py
#!/usr/bin/env python3
"""
Main file
"""

index_range = __import__('0-simple_helper_function').index_range

res = index_range(1, 7)
print(type(res))
print(res)

res = index_range(page=3, page_size=15)
print(type(res))
print(res)

bob@dylan:~$ ./0-main.py
<class 'tuple'>
(0, 7)
<class 'tuple'>
(30, 45)
bob@dylan:~$
```
