export function isBookmarked(selectedBookmark) {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  const index = bookmarks.findIndex(
    (bookmark) => bookmark.title === selectedBookmark?.title
  );
  return index > -1 ? true : false;
}
