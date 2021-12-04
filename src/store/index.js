import { reactive } from 'vue'

export default reactive({ flashMessage: '', event: null })
// event is where we'll store the data returned from our API, 
// and where our component will look for the data. 
