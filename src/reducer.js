function reducer(state, action) {
  switch (action.type) {
    case 'wants-to-add':
      return {
        ...state,
        wantsToAdd: true
      }
    case 'add-video':
      return {
        wantsToAdd: false,
        videos: [...state.videos, { url: action.url, id: action.id}],
      }
    case 'update-video':
      return {
        ...state,
        videos: state.videos.map(v => v.id === action.id ?
          {url: action.url, id: action.id} : v
        )
      }
    case 'delete-video':
      return {
        ...state,
        videos: state.videos.filter(v => v.id !== action.id)
      }
    default:
      return state
  }
}

export default reducer
