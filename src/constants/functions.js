const formatDateString = (dateString) => {
    const date = new Date(dateString);

    const padToTwoDigits = (num) => (num < 10 ? `0${num}` : num);

    const month = padToTwoDigits(date.getMonth() + 1); // getMonth() is zero-based
    const day = padToTwoDigits(date.getDate());
    const year = date.getFullYear();

    const hours = padToTwoDigits(date.getHours());
    const minutes = padToTwoDigits(date.getMinutes());

    return `${month}/${day}/${year} ${hours}:${minutes}`;
};

export { formatDateString };
