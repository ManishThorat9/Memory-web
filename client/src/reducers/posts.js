// eslint-disable-next-line import/no-anonymous-default-export
export default (posts =[], action)=> {
      switch (action.type) {
        case 'FETCH_ALL':
          return action.payload; // action.payload is post(data)

        case 'CREATE':
          return [...posts, action.payload]
        default:
          return posts;
        }
}