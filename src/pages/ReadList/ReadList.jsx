import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Book/Book';
const ReadList = () => {
    const [readList,setReadlist]=useState([])
    const data = useLoaderData();
    console.log(data);

    useEffect(() =>{
      const storedBookData =getStoredBook()
         const ConvertedStoredBooks =storedBookData.map(id=>parseInt(id))
            const myReadList =data.filter(book=>ConvertedStoredBooks.includes(book.bookId))
            setReadlist(myReadList)
    },[]
)
    return (
        <div>
           <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My wish list</Tab>
    </TabList>

    <TabPanel>
      <h2>Book reads{readList.length}</h2>
      {
        readList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;