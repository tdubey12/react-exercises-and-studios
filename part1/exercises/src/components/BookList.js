export default function BookList() {
   let pageTitle = "Books List";
   let book1 = "https://books.google.com/books/publisher/content?id=dMeJEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0qo5C2p29ZzGKu4rpcsRDs5Vwtnw&w=1280";
   let book2 = "https://books.google.com/books/publisher/content?id=EzSiEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3xBVZ2Oq_O9_dxqYLim-FJGDw9gw&w=1280";
   let book3 = "https://books.google.com/books/publisher/content?id=JsdvEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1bJXRpMV2GmlmV5ropDiz1jz2i2w&w=1280";

   return (
     
      <div>
      <h3 className="bookHeading">{pageTitle}</h3>
      <img src={book1} alt="Romantic Comedy by Curtis Sittenfield" height="100px" width="50px" />
      <img src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" height="100px" width="50px"/>
      <img src={book3} alt="The London Seance Society by Sarah Penner" height="100px" width="50px"/>
      </div>     
   );
}