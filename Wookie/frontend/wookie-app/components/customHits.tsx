import { connectHits } from 'react-instantsearch-dom';

const Hits = ({ hits }) => {

    return (
    <ol>
        {hits.map(hit => (
            <li key={hit.id}>{hit.title} - toto</li>
        ))}
    </ol>
    )
};

const WookieHits = connectHits(Hits);

export default WookieHits