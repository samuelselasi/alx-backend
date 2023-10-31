# 0x02. i18n
#### `Back-end`
![91e1c50322b2428428f9](https://github.com/samuelselasi/alx-backend/assets/85158665/b78ed6d7-8ae2-4df1-96f2-701e803018fe)

## Resources
**Read or watch**:

* [Flask-Babel](https://python-babel.github.io/flask-babel/)
* [Flask i18n tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-xiii-i18n-and-l10n)
* [pytz](https://pytz.sourceforge.net/)

## Requirements
* All your files will be interpreted/compiled on Ubuntu `18.04` LTS using `python3` (version `3.7`)
* All your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `pycodestyle` style (version `2.5`)
* The first line of all your files should be exactly `#!/usr/bin/env python3`
* All your `*.py` files should be executable
* All your modules should have a documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)
* All your classes should have a documentation (`python3 -c 'print(__import__("my_module").MyClass.__doc__)'`)
* All your functions and methods should have a documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'` and `python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)'`)
* A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)
* All your functions and coroutines must be type-annotated.

## Tasks

[0. Basic Flask app](./0-app.py)

First you will setup a basic Flask app in `0-app.py`. Create a single `/` route and an `index.html` template that simply outputs “Welcome to Holberton” as page title (`<title>`) and “Hello world” as header (`<h1>`).


[1. Basic Babel setup](./1-app.py)

Install the Babel Flask extension:
```
$ pip3 install flask_babel==2.0.0
```
Then instantiate the `Babel` object in your app. Store it in a module-level variable named `babel`.

In order to configure available languages in our app, you will create a `Config` class that has a LANGUAGES class attribute equal to `["en", "fr"]`.

Use `Config` to set Babel’s default locale (`"en"`) and timezone (`"UTC"`).

Use that class as config for your Flask app.


[2. Get locale from request](./2-app.py)

Create a `get_locale` function with the `babel.localeselector` decorator. Use `request.accept_language`s to determine the best match with our supported languages.


[3. Parametrize templates](./3-app.py)

Use the `_` or `gettext` function to parametrize your templates. Use the message IDs `home_title` and `home_header`.

Create a `babel.cfg` file containing
```
[python: **.py]
[jinja2: **/templates/**.html]
extensions=jinja2.ext.autoescape,jinja2.ext.with_
```
Then initialize your translations with
```
$ pybabel extract -F babel.cfg -o messages.pot .
```
and your two dictionaries with
```
$ pybabel init -i messages.pot -d translations -l en
$ pybabel init -i messages.pot -d translations -l fr
```
Then edit files `translations/[en|fr]/LC_MESSAGES/messages.po` to provide the correct value for each message ID for each language. Use the following translations:

| msgid | English | French |
| --- | --- | --- |
| `home_title` | `"Welcome to Holberton"` | `"Bienvenue chez Holberton"` |
| `home_header` | `"Hello world!"` | `"Bonjour monde!"` |

Then compile your dictionaries with
```
$ pybabel compile -d translations
```
Reload the home page of your app and make sure that the correct messages show up.
