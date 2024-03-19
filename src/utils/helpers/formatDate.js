export function formatDate(createdAt) {
  const date = new Date(createdAt);

  return `${date.getFullYear()}/${formatNumber(
    date.getMonth() + 1
  )}/${formatNumber(date.getDate() + 1)}`;
}

function formatNumber(number) {
  return number >= 10 ? number : `0${number}`;
}
