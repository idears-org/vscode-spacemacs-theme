
# This is a comment
from typing import List

CONSTANT_VALUE = 3.14
variable = "Hello, World!"

@decorator
def greet(name: str) -> str:
    """
    A sample function.
    """
    if name:
        print(f"Hello, {name}")
    else:
        print("Hello, stranger")
    return f"Greetings, {name}"

class MyClass(object):
    def __init__(self, name):
        self.name = name

    def my_method(self):
        for i in range(5):
            print(i)
        
        a_list = [1, 2, 3]
        a_dict = {'key': 'value'}

async def async_function():
    pass

instance = MyClass("instance")
num = 123
is_true = True
is_false = False
is_none = None
