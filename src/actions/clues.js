export const getClues = (clues) => {
  return {
    type: 'GET_CLUES',
    clues,
  };
};

export const fetchClues = (category_id) => {
  console.log('INSIDE FETCH', category_id);
  return (dispatch) => {
    return fetch(
      // This will only return 1 clue if we put a limit on value:
      // http://jservice.io/api/clues?category=4707&value=100
      `http://jservice.io/api/clues?category=${category_id}`,
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        for (let clue of data) {
          let clueObj = {
            id: clue.id,
            answer: clue.answer,
            question: clue.question,
            value: clue.value,
          };
          dispatch(getClues(clueObj));
        }
      });
  };
};
