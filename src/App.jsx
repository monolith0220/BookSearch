export const BookSearch = () => {
  return (
    <div>
      <BookSearchHeader />
      <BookSearchResult />
      {/* <BookSearchDetails /> */}
    </div>
  );
};

const BookSearchHeader = () => {
  return (
    <header>
      <h1>
        BookSearch! <span>by 楽天ブックス</span>
      </h1>
      <BookSearchFormInput />
      <BookSearchFromButton />
    </header>
  );
};

const BookSearchFormInput = () => {
  return <input type="text" placeholder="キーワード" />;
};

const BookSearchFromButton = () => {
  return <button>検索</button>;
};

const BookSearchResult = () => {
  return (
    <div className="item-list">
      <BookSearchFormRadio />
      <div>
        <BookSearchItem />
        <BookSearchItem />
        <BookSearchItem />
      </div>
    </div>
  );
};

const BookSearchFormRadio = () => {
  return (
    <div>
      <label htmlFor="sales">
        <input type="radio" id="sales" />
      </label>
    </div>
  );
};

// const BookSearchDetails = () => {
//   return()
// };
