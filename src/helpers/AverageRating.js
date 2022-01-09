const RATE_MIN = 1;
const RATE_MAX = 5;

const getAverageRating = (course, ratingCategory) => {
  let sum = 0;
  let count = 0;
  course.reviews.forEach((review) => {
    const rating = review.rating[ratingCategory];
    if (rating >= RATE_MIN && rating <= RATE_MAX) {
      sum += rating;
      count++;
    }
  });
  if (count === 0) {
    return 0;
  }
  const average = sum / count;
  return average.toFixed(1);
};

export default getAverageRating;
