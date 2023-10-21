#!/usr/bin/env python3
"""Module that contains helper function that returns range of indexes"""


def index_range(page, page_size):
    """Function that returns range of indexes of pagination parameters"""

    if page and page_size:
        start_index = (page - 1) * page_size
        end_index = start_index + page_size
        return start_index, end_index
