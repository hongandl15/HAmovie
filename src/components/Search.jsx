import { useHistory} from 'react-router-dom';
const Search = () => {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/explore/${e.target.keyword.value}`,{
    keyword: e.target.keyword.value
    })
 };

  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text" 
          name="keyword"
        />
    </form>
  )
}

export default Search