#!/usr/bin/env python3
"""Module that contains helper function that returns range of indexes"""
import csv
import math
from typing import List
from typing import Dict, Any


def index_range(page, page_size):
    """Function that returns range of indexes of pagination parameters"""

    if page and page_size:
        start_index = (page - 1) * page_size
        end_index = start_index + page_size
        return start_index, end_index


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Function that returns the appropriate page of the dataset"""

        assert type(page) == int and page > 0
        assert type(page_size) == int and page_size > 0

        start_index, end_index = index_range(page, page_size)
        page = []

        if start_index >= len(self.dataset()):
            return page

        page = self.dataset()
        return page[start_index:end_index]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, Any]:
        """Function that returns a dictionary containing page data"""

        assert type(page) == int and page > 0
        assert type(page_size) == int and page_size > 0

        total_pages = math.floor(len(self.dataset()) / page_size)
        return {"page_size": len(self.get_page(page, page_size)),
                "page": page,
                "data": self.get_page(page, page_size),
                "next_page": page + 1 if page + 1 < total_pages else None,
                "prev_page": page - 1 if page > 1 else None,
                "total_pages": total_pages}
